    document.querySelector(".toggle .fa-gear").onclick = function (){
    this.classList.toggle("fa-spin");
    document.querySelector(".Setting-Box").classList.toggle("open");
    };

    // take color from local stor

    // change color in page 
    let Mycolors = document.querySelectorAll(".colors-list li");

    Mycolors.forEach(li => {
        li.addEventListener("click" , (e) => {
            // set color on root
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color); 

            // add the target color to local storage

            localStorage.setItem('Mycolor',e.target.dataset.color);
        
            HandleActiveClass(e);
        } );
    
        
    });

    if(localStorage.getItem('Mycolor') !== null)
    {
        document.documentElement.style.setProperty('--main-color',localStorage.getItem('Mycolor'));

        // remove active class from all lis
        document.querySelectorAll(".colors-list li").forEach(ele => {
            ele.classList.remove("active");
        
            // add active class
            if(ele.dataset.color === (localStorage.getItem('Mycolor')) )
            {
                ele.classList.add("active");
            }
        });
        
    }

    // Random Background option
    let mysps = document.querySelectorAll(".Random span");
    let myRandBGoption = true;
    let myRandBGOControl;
    mysps.forEach(span => {
        span.addEventListener("click" , (e) => {
            
            // remove(add) active class from(add) span elements
            HandleActiveClass(e);
        
            if (e.target.dataset.background === "Yes")
            {
                myRandBGoption = true;
                RandomBgChange();
                localStorage.setItem("MyRandBGoption",true);
                
                console.log(localStorage.getItem("MyRandBGoption"));
            }
            else
            {
                myRandBGoption =false;
                clearInterval(myRandBGOControl);
                localStorage.setItem("MyRandBGoption",false);
                
                console.log(localStorage.getItem("MyRandBGoption"));
            }

            

        });
    });

    if(localStorage.getItem("MyRandBGoption") !== null)
    {
    
    
        if (localStorage.getItem("MyRandBGoption") === 'true')
            {
                myRandBGoption = true;
                

            }
            else{
                myRandBGoption = false;
                
            }
        document.querySelectorAll(".Random span").forEach(e => {
            
            e.classList.remove("active");

        
        });
        if (localStorage.getItem("MyRandBGoption") === 'true')
        {
            document.querySelector(".Random  .Yes").classList.add("active");
        }
        else{
            document.querySelector(".Random .No").classList.add("active");
        }
        
    }
    /* Get Landing Page */

    let MyLandingPage = document.querySelector(".landing");

    // Get MyImgs
    let ImgsArr = ["1.jpg","2.jpg","3.jpg","4.jpg"];

    // Change my backgroundImage Normaly
    function RandomBgChange(){
        if(myRandBGoption === true){
    myRandBGOControl= setInterval ( () => {
        // Get RandomNumber to Get myIndex
        let MyRandomNum = Math.floor(Math.random() * ImgsArr.length);
        
        MyLandingPage.style.backgroundImage = 'url("img/' + ImgsArr[MyRandomNum] +'")';

    },1000);
    }
    else{

        clearInterval(myRandBGOControl);
    }

    }

    RandomBgChange();

    // set data-progress to every skill of our-skills

    let mySkills = document.querySelector(".Our-Skills");

    window.onscroll = function () 
    {
        // get offsetTop of mySkills
        let skillsoffsettop = mySkills.offsetTop;

    
        // get mySkills height
        let MyskillsHeight = mySkills.offsetHeight;

        
        // get window Height
        
        let WinH = this.innerHeight;

        // get  Windowtop scroll (y)
        let winScrolTop = this.pageYOffset;
        
        //  console.log(skillsoffsettop);
        //  console.log(MyskillsHeight);
        //  console.log(WinH);
        //  console.log(winScrolTop);
    
        
        if (winScrolTop >= ( (skillsoffsettop + MyskillsHeight) - (WinH)))  {

        
            let myskillspan = document.querySelectorAll(".Skill-box .skill-progress span");
        

            myskillspan.forEach(skill =>  {
                    skill.style.width = skill.dataset.progress;
            });
        }
        
    };

    // Start popUp for Images
    
    let myImages = document.querySelectorAll(".Imgs-box img");

    myImages.forEach(img => {
            img.addEventListener('click' , (e) => {
                // Create OverLay
                let mypopupoverlay = document.createElement("div");
                // create class for overlay
                mypopupoverlay.className="popup-overlay";
                // add overlay to document
                document.body.appendChild(mypopupoverlay);

                // Create PopUp For img
                let ImgPopUp = document.createElement("div");
                // Give ImgPopUp Class
                ImgPopUp.className = "Pop-up";
                
                // Create heading for ImgPopUp
                if(img.alt !== null)
                {
                    let PopH = document.createElement("h2");
                    
                    let Htext = document.createTextNode(img.alt);
                    
                    PopH.className="Pop-H";
                    PopH.appendChild(Htext);
                    
                    ImgPopUp.appendChild(PopH);

                }
                

                // Creae Image for PopUp
                let Img = document.createElement("img");
                Img.className ="PopUp-Img";
                Img.src = img.src;

                // Append Img to Pop-Up
                ImgPopUp.appendChild(Img);
                
                // Create CloseButton and add it to ImgPopUp
                let myButton = document.createElement("span");
                myButton.className= "PopUp-Btn";
                let BtnText = document.createTextNode("X");
                myButton.appendChild(BtnText);

                ImgPopUp.appendChild(myButton);

                // add ImgPopUp to document
                document.body.appendChild(ImgPopUp);

            });
    });
    
    // Close ImgPopUp and PopUpOverlay
    document.addEventListener('click', function (e) {
        if (e.target.className === "PopUp-Btn")
        {
            // remove ImgPopUp
            e.target.parentElement.remove();
            
            // remove OverLay from docuement

            document.querySelector(".popup-overlay").remove();

        }
    });
    
    // End popUp for Images


    // Start go to anySection smoothly in my Page
        let myBullets = document.querySelectorAll(".Nav-section .bullet");
        let mylinks = document.querySelectorAll(".links  li");
        

        function GoToSomeWhere(Elements){ 
            Elements.forEach(Element => {
            Element.addEventListener("click" , (b) => {
                    b.preventDefault();
                        document.querySelector(b.target.dataset.button).scrollIntoView({
                            behavior : "smooth"
                    });
            });
        })
        };
        
    
        GoToSomeWhere(myBullets);
        GoToSomeWhere(mylinks);

    // End go to anySection smoothly in my Page

    // Handle Active Class

    function HandleActiveClass(ev) {
        ev.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active");
        });
        // add active class on the target element
        ev.target.classList.add("active");
    } 

    // Handle Bullets show 

    let mybulletsOption =document.querySelectorAll(".bullets span");
    let myNavSection =document.querySelector(".Nav-section");

    mybulletsOption.forEach(sp => {
        sp.addEventListener("click", (ele) =>{
            HandleActiveClass(ele);
            if(sp.dataset.option === "Show"){
            
                myNavSection.style.display = 'block';
                localStorage.setItem("mYOption" , true);
            }
            else{
                myNavSection.style.display = 'none';
                localStorage.setItem("mYOption" , false);
            }
        });
        
    });

    if(localStorage.getItem("mYOption") !== null)
    {
        if(localStorage.getItem("mYOption") === 'true'){
            myNavSection.style.display = 'block';
        }
        else
        {
            myNavSection.style.display = 'none';
        }
        document.querySelectorAll(".bullets span").forEach(span => {
            span.classList.remove("active");
            });

            if(localStorage.getItem("mYOption") === 'true')
            {
                document.querySelector(".bullets .Yes").classList.add("active");
            }
            else
            {
                document.querySelector(".bullets .No").classList.add("active");
            }
        
    }
    
    // Reset localstorage
    
    document.querySelector(".Setting-Box .Reset").onclick = function (){
        localStorage.clear();
        window.location.reload();
    }

    // toggle menu

    let MyToggleBTn = document.querySelector(".toggle-menu");
    let mYlinKs = document.querySelector(".landing .links");

    MyToggleBTn.onclick = function(e) {
        // Stop Propagation
        e.stopPropagation();
        // add class to menu-toggle
        MyToggleBTn.classList.toggle("menu-active");
        // open menu-toggle
        mYlinKs.classList.toggle("open");
    }

    document.addEventListener('click', (e) => {
        if(e.target !== MyToggleBTn && e.target !== mYlinKs){
            if(mYlinKs.classList.contains("open"))
            {
                MyToggleBTn.classList.toggle("menu-active");
                // open menu-toggle
                mYlinKs.classList.toggle("open");
            }
        }
    })

    // Stop Propgation for Links
    mYlinKs.onclick =function (e) {
        e.stopPropagation();
    }

    // message for users

    let mybtnsubmit = document.querySelector(".Contact-Us form input[type='submit']");

    mybtnsubmit.onclick = function (){
        window.alert("Thanks you for contacting Us, We have received your information, What you want, and We will Contact with you soon. ");
    }
