function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

init();




var clutter = ""

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){
    // getting a input
        var input = document.getElementById("txtmsg").value
        console.log(input)

    // getting a password
        var password = document.getElementById("password").value
        console.log(password)

    // splitting the input
        const str = input.split("")
        console.log(str)

    // converting it in an emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
        });
        console.log(clutter)

    // storing it in result
        document.querySelector(".result").style.display = "block"
        document.querySelector(".result").innerHTML = clutter

        var dataarr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataarr = JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass":password, "input":input, "clutter":clutter})
        }else{
            dataarr = [{"pass": password, "input":input, "clutter":clutter}]
        }
        localStorage.setItem('data1',JSON.stringify(dataarr))
    })

}

encryption()

function btnClick(){
    document.querySelector("#dec-btn").addEventListener("click",function(){
        document.querySelector(".decryption").style.display = "block"
        document.querySelector(".encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector(".result").style.display = "none"
        document.querySelector(".main>h1 span img").style.rotate = "270deg"
    })

    document.querySelector("#enc-btn").addEventListener("click",function(){
        document.querySelector(".encryption").style.display = "block"
        document.querySelector(".decryption").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector(".main>h1 span img").style.rotate = "90deg"
        document.querySelector(".result").style.display = "none"

    })

    document.querySelector("#encrypt-btn").addEventListener("click",function(){
        document.querySelector(".result").style.display = "block"
    })
    
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector(".result").style.display = "block"
    })
}

btnClick()