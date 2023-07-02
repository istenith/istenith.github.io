---
title: "Julia on the GPU"
date: "2020-12-22"
featuredImage: "mandlebrot.jpeg"
author: "Arsh Sharma"
email: "sharmarsh15@gmail.com"
tags: ['julia', 'GPU']
---
Nowadays GPUs are not just confined to gaming requirements. A GPUs ability to distribute the computational load over hundreds of cores makes then effective enough for a variety of applications like Machine Learning, scientific computing etc. The Julia language has a powerful GPU-compute stack that goes by the name of JuliaGPU.
Today we will try to use the GoogleCollab environment to install julia and the GPU related stuff in it. We know that Julia isn't officially supported by Collab, but we can hack around to accomplish that.

## Step 1: Installing CUDA 

Start a collab notebook and run the following code

```
!wget https://developer.nvidia.com/compute/cuda/9.0/Prod/local_installers/cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb
!dpkg -i cuda-repo-ubuntu1604-9-0-local_9.0.176-1_amd64-deb
!apt-key add /var/cuda-repo-9-0-local/7fa2af80.pub
!apt update -q
!apt install cuda gcc-6 g++-6 -y -q
!ln -s /usr/bin/gcc-6 /usr/local/cuda/bin/gcc
!ln -s /usr/bin/g++-6 /usr/local/cuda/bin/g++
```

It will take a while to install everything.

This will install nvidia's CUDA, the GPU compute stack for nvidia GPUs.

## Step 2: Installing Julia

```
!curl -sSL "https://julialang-s3.julialang.org/bin/linux/x64/1.5/julia-1.5.0-linux-x86_64.tar.gz" -o julia.tar.gz
!tar -xzf julia.tar.gz -C /usr --strip-components 1
!rm -rf julia.tar.gz*
!julia -e 'using Pkg; pkg"add IJulia; precompile"'
```
This will install the latest julia version 1.5.0, you can change the above like for a desired version.

## Step 3 : Setting up the runtime

Head over to the runtime tab and select change runtime type option and select Julia from the drop down. 

## Step 4 : Running code

So this is it ! You can try running any sample code in the notebook cells.

If you run into any errors with the runtime, something didn't go well and you can re run all the steps in a fresh notebook!

# Julia on the GPU | Mandelbrot Set

The previous article we saw how one can install and run Julia over the google collab servers. Here we will try to run some meaningful code over the GPU using Julia. 

## Step 1 : Setup Julia GPU

We will use the JuliaGPU compute stack for crunching the Mandelbrot set over the google collab GPUs.
```
]add CuArrays, GPUArrays
```
Installing the JuliaGPU components
```
using CuArrays, GPUArrays
```

## Step 2 : Setup plotting stacks

The following packages are needed for plotting out mandlebrot set
```
]add ImageMagick, Images, Colors, ColorSchemes
using Images, Colors, ColorSchemes
```

## Step 3 : The Mandelbrot set code

The match behind the Mandelbrot set is abit much from this article's perspective. You can learn more about it here
The steps method defines the number of steps we need to take to get out of the Mandelbrot set.
```
function steps(c::Complex, maxsteps)
  z = Complex(0.0, 0.0)
  for i in 1:maxsteps
    z = z*z + c
    if abs2(z) >= 4
      return i
    end
  end
  return maxsteps+1
end

Now we need to define the color scheme for our mandelbrot set. 
function get_color(colorschema, step, maxsteps)
  if step == maxsteps+1
    return[0.0 ,0.0, 0.0]
  end
  color = get(colorschema, step, (1, maxsteps))
  return[color.r, color.g, color.b]
end

function get_cmap(colorschema, maxsteps)
  colors = zeros(Float64, (3, maxsteps+1))
  for i=1:max_steps
    colors[:,i] = get_color(colorschema, i, maxsteps)
  end
  colors[:,max_steps+1] = [0.0, 0.0, 0.0]
  return colors
end
Finally we get to the part of writing the main method that computes the mandelbrot set using GPU's
function mandelbrotplot()
  w = 1000
  h = 600

  maxsteps = 50
  steps = zeros(Int, (height, width))

  # this will determine the 
  # location of the origin in the image
  crmin = -2+.5+.3+.2
  crmax = 2.5-.5-.9-.4-.6-.3-.1-.1-.1-.1-.1-.2-.01-.01-.01-.02-.01369-.0089-.00462952-.05

  cimmin = -1.2+.5+.25+.16+.02
  
  range = crmax - crmin
  dotsize = range/width
  cimmax = cimmin + height*dotsize

  img = zeros(Float64, (3, height, width))
  complexes = zeros(ComplexF64, (height, width))
  steps = zeros(Int, (height, width))

  # Creates a GPU compatible CuArray
  custeps = CuArray(zeros(Int, (height, width)))
  
  colorscheme = ColorSchemes.inferno
  colorschemesized = get_cmap(colorscheme, max_steps)
  x, y = 1, 1
  for cim = cim_min:dotsize:cimmax-dotsize
    x = 1
    for cr=cr_min:dotsize:crmax-dotsize
      complexes[y,x] = Complex(cr, cim)
      x += 1
    end
    y += 1
  end
  
  # This part handles the computation
  # That is offloaded to GPU
  cucomplexes = CuArray(complexes)
  custeps .= stepscount.(cucomplexes, maxsteps)
  GPUArrays.synchronize(custeps)
  steps = Array(custeps)

  image = colorschemesized[:, steps]
  save("mandelbrot.png" ,colorview(RGB,image))
end  
```
calling the function
```
mandelbrotplot()
```
If you now open the `mandelbrot.png` file, the following output will be generated

A Mandelbrot set

![mando](mandlebrot.jpeg)

You can navigate/zoom into various parts of the set via `crmin`, `crmax`, `crmmin` values.

![mando](mandopart.png)

