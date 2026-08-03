const servicesLink = document.getElementById("servicesLink").addEventListener("click", ()=>{
    document.getElementById("service").scrollIntoView({behavior: "smooth"});
});
const aboutLink = document.getElementById("aboutLink").addEventListener("click", ()=>{
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
});
const projectLink = document.getElementById("projectLink").addEventListener("click", ()=>{
    document.getElementById("project").scrollIntoView({behavior: "smooth"});
});

const contactLink = document.getElementById("contactLink").addEventListener("click", ()=>{
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

const HireLink = document.getElementById("hireLink").addEventListener("click", ()=>{
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
});

const viewPort = document.getElementById("viewPort").addEventListener("click", ()=>{
    document.getElementById("WHATIDO").scrollIntoView({behavior: "smooth"});
})

const Hire = document.getElementById("HireMe").addEventListener("click", ()=>{
    document.getElementById("letsTalk").scrollIntoView({behavior: "smooth"});
})
const mobileServices = document.getElementById("mobileServices").addEventListener("click", ()=>{
    document.getElementById("service").scrollIntoView({behavior: "smooth"});
    const containerF = document.getElementById("mobileFContainer").classList.remove("show")
     if(containerF === true){
    document.getElementById("bars").style.display = "none"
    document.getElementById("xmark").style.display = "block"
  }else{
    document.getElementById("xmark").style.display = "none"
    document.getElementById("bars").style.display = "block"
  }

})

const mobileAboutMe = document.getElementById("mobileAboutMe").addEventListener("click", ()=>{
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
    const containerF = document.getElementById("mobileFContainer").classList.remove("show")
     if(containerF === true){
    document.getElementById("bars").style.display = "none"
    document.getElementById("xmark").style.display = "block"
  }else{
    document.getElementById("xmark").style.display = "none"
    document.getElementById("bars").style.display = "block"
  }

})

const featuredProjects = document.getElementById("featuredProjects").addEventListener("click", ()=>{
    document.getElementById("project").scrollIntoView({behavior: "smooth"});
    const containerF = document.getElementById("mobileFContainer").classList.remove("show")
    if(containerF === true){
    document.getElementById("bars").style.display = "none"
    document.getElementById("xmark").style.display = "block"
  }else{
    document.getElementById("xmark").style.display = "none"
    document.getElementById("bars").style.display = "block"
  }
})

const contactC = document.getElementById("contactC").addEventListener("click", ()=>{
    document.getElementById("letsTalk").scrollIntoView({behavior: "smooth"});
    const containerF = document.getElementById("mobileFContainer").classList.remove("show")
    if(containerF === true){
    document.getElementById("bars").style.display = "none"
    document.getElementById("xmark").style.display = "block"
  }else{
    document.getElementById("xmark").style.display = "none"
    document.getElementById("bars").style.display = "block"
  }
})
const navBar = document.querySelector(".navBars ").addEventListener("click", (e)=>{
   
  const containerF =  document.getElementById("mobileFContainer").classList.toggle("show");
  console.log(containerF)
  if(containerF === true){
    document.getElementById("bars").style.display = "none"
    document.getElementById("xmark").style.display = "block"
  }else{
    document.getElementById("xmark").style.display = "none"
    document.getElementById("bars").style.display = "block"
  }
})




// toggle 
// const button =document.getElementById("button");
// button.addEventListener("click", ()=>{
//     document.querySelector("body").classList.toggle("dark")
// });

// const submitButton = document.getElementById("submitButton")
//  const modal= document.querySelector(".modal");

// submitButton.addEventListener("click", ()=>{
//     modal.classList.toggle("show")
// })
// const submitButton = document.getElementById("submitButton");
//  const modal= document.querySelector(".modal");
//  const cancel=  document.getElementById("cancel");

// submitButton.addEventListener("click", ()=>{
//     modal.classList.add("show");
// });
// cancel.addEventListener("click", ()=>{
//     modal.classList.remove("show");
// });

    // if(modal.classList.contains("show")){
    //        modal.classList.remove("show") 
    //   }

// const change = document.getElementById("contactLink").addEventListener("mouseover", ()=>{
//     document.getElementById("Body").style.backgroundColor = "red"
// });
// const change1 = document.getElementById("contactLink").addEventListener("mouseleave", ()=>{
//     document.getElementById("Body").style.backgroundColor = "blue"
// })