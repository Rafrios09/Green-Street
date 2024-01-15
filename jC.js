const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
var optionInfo = document.querySelector(".option1-info");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        if(sBtn_text.innerText == "Solar Energy"){
          optionInfo.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Solar.png">
          </div>
          <div class="info-unit">
            <h2>Example TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text.innerText == "Natural Gas"){
          optionInfo.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Gas.png">
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text.innerText == "Wind Energy"){
        optionInfo.innerHTML = `
        <div class="info-unit">
          <img src="/Images/1-Wind.png">
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.1</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.2</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.3</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.4</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.5</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.6</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>`;
        }

        if(sBtn_text.innerText == "Geothermal Energy"){
          optionInfo.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Geo.png">
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text.innerText == "Hydro Energy"){
          optionInfo.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Hydro.png">
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }
      
        optionMenu.classList.remove("active");
    });
});

const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
var optionInfo2 = document.querySelector(".option2-info");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption2 = option.querySelector(".option-text2").innerText;
        sBtn_text2.innerText = selectedOption2;

        if(sBtn_text2.innerText == "Solar Energy"){
          optionInfo2.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Solar.png">
          </div>
          <div class="info-unit">
            <h2>Example TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Solar TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text2.innerText == "Natural Gas"){
          optionInfo2.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Gas.png">
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Gas TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text2.innerText == "Wind Energy"){
        optionInfo2.innerHTML = `
        <div class="info-unit">
          <img src="/Images/1-Wind.png">
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.1</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.2</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.3</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.4</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.5</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>
        <div class="info-unit">
          <h2>Wind TOPIC2.6</h2>
          <p>Lorem ipsum dolor sit amet<p>
        </div>`;
      }

        if(sBtn_text2.innerText == "Geothermal Energy"){
          optionInfo2.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Geo.png">
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Geo TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }

        if(sBtn_text2.innerText == "Hydro Energy"){
          optionInfo2.innerHTML = `
          <div class="info-unit">
            <img src="/Images/1-Hydro.png">
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.1</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.2</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.3</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.4</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.5</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>
          <div class="info-unit">
            <h2>Hydro TOPIC2.6</h2>
            <p>Lorem ipsum dolor sit amet<p>
          </div>`;
        }
      

        optionMenu2.classList.remove("active");
    });
});

 