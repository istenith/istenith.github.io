import vim_plugins from "./Blogs/vim_plugins/vim_plugins.md";
import vimImg from "./Blogs/vim_plugins/vim.png"
import intelligent_hardware from "./Blogs/Challenges_and_Oppurtunities_in_Intelligent_Hardware/blog.md";
import intelligent_hardwareImg from "./Blogs/Challenges_and_Oppurtunities_in_Intelligent_Hardware/cover.jpeg";
import julia_ongpu from "./Blogs/Julia_on_the_GPU/mandlebrot.md";
import julia_ongpuImg from './Blogs/Julia_on_the_GPU/mandlebrot.jpeg';
import linux_shells from "./Blogs/Linux_Shells/Blog.md";
import linux_shellsImg from "./Blogs/Linux_Shells/cover.jpg";
import choose_linux from "./Blogs/Choosing_the_right_Linux_distribution/Distros.md";
import choose_linuxImg from "./Blogs/Choosing_the_right_Linux_distribution/cover.jpg";
import julia_package from "./Blogs/Creating_Packages_in_Julia/Creating_Packages_in_Julia.md";
import julia_packageImg from "./Blogs/Creating_Packages_in_Julia/julia.png";
import serverless from "./Blogs/Serverless_Computing/serverless.md";
import serverlessImg from "./Blogs/Serverless_Computing/serverless.jpg";
import ssa from "./Blogs/Static_Single_Assignment(SSA)_in_compilers/ssa.md";
import ssaImg from "./Blogs/Static_Single_Assignment(SSA)_in_compilers/ssa.png";
import useful_cli from "./Blogs/useful_commandline_tools/terminalutilities.md";
import useful_cliImg from "./Blogs/useful_commandline_tools/terminal.png";

const blogData = [
  {
    id: 1,
    blog_title: "Vim plugins that make life easy!",
    image:vimImg,
    author: "Parth Pant",
    tags: ["linux", "vim", "neovim"],
    description:
      "Vim is a great text editor, in fact some would argue it is the best text editor! But the problem is that it is just a text editor. Nothing more, nothing less...",
    mdfile: vim_plugins,
  },
  {
    id: 2,
    blog_title: "Challenges and Oppurtunities in Intelligent Hardware",
    image: intelligent_hardwareImg,
    author: "Vansh Thakur",
    tags: ['hardware', 'IoT', 'AI','embedded systems'],
    description:
      "More data has been created in the past two years than the entire history of the human race... ",
    mdfile: intelligent_hardware,
  },
  {
    id: 3,
    blog_title: "Julia on the GPU",
    image:julia_ongpuImg,
    author: "Arsh Sharma",
    tags: ['julia', 'packages'],
    description:
      "This article is a step by step detail of how one can write his/her own package manager in Julia...",
    mdfile: julia_ongpu,
  },
  {
    id: 4,
    blog_title: "Creating Packages in Julia",
    image: julia_packageImg,
    author: "Arsh Sharma",
    tags: ['julia', 'GPU'],
    description:
      "Nowadays GPUs are not just confined to gaming requirements. A GPUs ability to distribute the computational load over hundreds of cores makes then effective enough for a variety of applications like Machine Learning, scientific computing etc...",
    mdfile: julia_package,
  },
  {
    id: 5,
    blog_title: "Choosing the right Linux distribution",
    image: choose_linuxImg,
    author: "Parth Pant",
    tags: ["linux", "noobfriendly"],
    description:
      "This blog will give you an idea about different distros that are available and which one you should choose as a beginner. Lets begin with looking at some of the big names that are available...",
    mdfile: choose_linux,
  },
  {
    id: 6,
    blog_title: "Linux Shells",
    image:linux_shellsImg,
    author: "Sumit Dhiman",
    tags: ['linux', 'userfriendly', 'shell', 'bash'],
    description:
      "A Shell provides you with an interface to the Unix system. It gathers input from you and executes programs based on that input. When a program finishes executing, it displays that program's output...",
    mdfile: linux_shells,
  },
  {
    id: 7,
    blog_title: "Serverless Computing",
    image: serverlessImg,
    author: "Gaurav Pandey",
    tags: ['serverless', 'development'],
    description:
      "Developers spend countless hours solving business problems with code. Then it’s the ops team’s turn to spend countless hours, first figuring out how to get the code that developers write up and running on whatever computers are available, and second making sure those computers operate smoothly...",
    mdfile: serverless,
  },
  {
    id: 8,
    blog_title: "Static Single Assignment(SSA) in compilers",
    image: ssaImg,
    author: "Arsh Sharma",
    tags: ['compilers', 'development'],
    description:
      "In computer programming, as in real life, names are useful handles for concrete entities. The key point about SSA is that having unique names for distinct entities reduces uncertainty and imprecision... ",
    mdfile: ssa,
  },
  {
    id: 9,
    blog_title: "Useful Command Line Tools",
    image: useful_cliImg,
    author: "Deepak Singh",
    tags: ['terminal', 'linux','noobfriendly'],
    description:
      "The Linux command line is a text-based computer interface, and It is also known as the shell, terminal, console, prompt, and a variety of other names, and it can be intimidating at first for beginners...",
    mdfile: useful_cli,
  },
];
export default blogData;
