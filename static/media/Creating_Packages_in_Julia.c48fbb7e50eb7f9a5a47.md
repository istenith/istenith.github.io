---
title: "Creating Packages in Julia"
date: "2020-12-22"
featuredImage: "julia.png"
author: "Arsh Sharma"
email: "sharmarsh15@gmail.com"
tags: ['julia', 'packages']
---

![julia](julia.png)

We are well aware that in order to use the functionality that Julia offers we often need to write out own packages so that we and many people across the world can use those packages into their workflow. Julia has a very rich package ecosystem and a powerful package manager. 

This article is a step by step detail of how one can write his/her own package manager in Julia.

## Step 1: Creating a Package Template

![plots](plotsjl.png)

In the above picture you can see that apart from the src folder that holds the main code pertaining to the package, there are many other files and folder like `Project.TOML`, `test`, `README.md`, `codecov.yml` etc. that are required by julia for things like version control, testing etc. 
To automatically generate this for our package we will use the `PkgTemplates.jl` package to create a template.
```
using Pkg
Pkg.add("PkgTemplates")
using PkgTemplates
```

![pkgtemplates](pkgtemp.jpeg)

A template can be created using the `Template()` method. 
```
t = Template(;
             user="gfg",
             license="MIT",
             authors=["gfguser", "juliapkg"],
             plugins=[
             TravisCI(),
             ],)
```
Some more examples are given [here](https://invenia.github.io/PkgTemplates.jl/stable/user/#A-More-Complicated-Example-1).

## Step 2: Generating a package from the template

Now we need to generate our package using the template that we created above using the `generate()` method.
```
#generates a package named 
#isteforlife.jl

generate("isteforlife.jl",t)
```

It says that the new package is available by the name of `isteforlife.jl` !

## Step 3: Adding code to the package

![files](files.jpeg)

If you head over to the `.julia/dev/isteforlife` folder, you will find a directory structure similar to the one that we saw above. 
Head on to the src folder and open the isteforlife.jl file and add some basic code to it. 
```
println("This is my first julia package")
println(20 + 20)
```

## Step 4: Running the package

Now that we have added some started code, let's take the package out for a spin!
```
# tell julia that it can use the new package
using Pkg
Pkg.resolve()

using isteforlife
```

## Conclusion:

This article highlighted the very basic ways of creating packages. For complex workflows one can refer to the `PkgTemplates` documentation.

