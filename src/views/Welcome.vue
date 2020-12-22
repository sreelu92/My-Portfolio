<template>
  <div id="container">
    <div id="headcontent">
      <h4>My Portfolio</h4>
     
    </div>
     <img id="mypic" src="@/assets/mypic.jpg" alt="my image">
    <div id="contentcontainer">
        <h3 id="h3one">SREE ANOOB</h3>
        <h4>FullStack Web Developer</h4>
        <h5 id="h5one">I recently completed diploma in Full Stack Web Development program from InnoTech college.
            I also have bachelor degree in Computer Science and Engineering. My goal is to work in a reputed firm as a professional Full Stack Web Developer where I can use my knowledge and skills. </h5>
        <a id="linkone" href="https://drive.google.com/file/d/1YOHrHiy3oC9KubE86zyKVI-skTDTZ203/view?usp=sharing"> View My Resume</a>
    </div>

    <div id="skillcontainer">
        <h2 id="skillh2one">Skills</h2>
        <hr id="skillhr">

        <div id="skilldiv">
              <div id="skilldivone">
             <h3>Frontend:</h3>
             <p>HTML</p>
             <p>CSS</p>
             <p>JavaScript</p>
             <p>Vue JS</p>
             <p>SASS</p>

            </div>


            <div id="skilldivtwo">
             <h3>Backend:</h3>
             <p>SQL</p>
             <p>Python</p>
             <p>Flask</p>
             <p>APIs</p>
             <p>SASS</p>

            </div>

            <div id="skilldivthree">
             <h3>Relevant:</h3>
             <p>Github</p>
             <p>Bash</p>
             <p>C#</p>
             </div>


        </div>


          
        
        

    </div>
    <div id="workdiv">
        <h2>My Works</h2>
        <hr id="workhr">
        <div id="displayworks">
            <div id="workdivone">
                <img class="workimg" src="@/assets/okotoks.jpg" alt="snap of okotoks project"><br><br>
                <a class="worklink" href="https://okotokspizzashop.ml">Okotoks Pizza</a>
                <p>Responsive pizza shop website designed with pure HTML and SASS</p>

            </div>
            <div id="workdivtwo">
                <img class="workimg" src="@/assets/tweetter.jpg" alt="snap of tweeter project"><br><br>
                <a class="worklink" href="http://tweetterclone.ml">Tweeter Frontend</a>
                <p>Frontend tweeter website designed with HTML,CSS and JavaScript</p>

            </div>
             <div id="workdivthree">
                <img class="workimg" src="@/assets/noteappimage.jpg" alt="snap of noteapp project"><br><br>
                <a class="worklink" href="https://noteapp.ml">Tweeter Frontend</a>
                <p>Full Stack website implemented with HTML,CSS,JavaScript,SQL,Python</p>

            </div>


        </div>
        

        


    </div>
    <foot-page></foot-page>
  </div>
</template>

<script>
import FootPage from "../components/Contact.vue"
export default {
  name: "welcome-page",
  components: {
      FootPage,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
#container {
 min-height: 120vh;
  background-image: url(https://www.itopstimes.com/wp-content/uploads/2019/08/geometric-1732847_960_720.jpg);
  #headcontent{
       font-family: 'Roboto Slab', serif;
       color: white;
       text-align: center;


  }
 #mypic{
     width:20%;
     border-radius: 10px;
     margin-top: 8vh;
     margin-left: 40vw;
 }
  #contentcontainer {
    height: 40vh;
    width: 90vw;
    margin-top: 1vh;
    background-color:white;
    border: 1px solid grey;
    margin-left: 2.5vw;
    border-radius: 5px;
    text-align: center;
    #h3one{
        text-align: center;
        color: black;
        font-weight: bolder;
        font-size: larger;



    }
    #h5one{
        color: black;
        text-align: center;
    }
    #linkone{
        text-decoration: none;
        padding: 5px;
        background-color: royalblue;
        color: white;
        border-radius: 5px;
    }

  }
   
  #skillcontainer{
      width:90vw;
      min-height:50vh;
      background-color: white;
      margin-left: 2.5vw;
      border-radius: 5px;
      
      margin-top: 4vh;
     #skillh2one{
          text-align: center;
        }
        #skillhr{
            width: 50%;
        }
        #skilldiv{
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
            row-gap: 3vh;
            margin-top: 8vh;
            #skilldivone{
             width: 40vw;
             background-color: wheat;
             margin-left: 2vw;
              border-radius: 5px;
              text-align: center;
            }
            #skilldivtwo{
             width: 40vw;
             background-color: wheat;
             margin-left: 4vw;
              border-radius: 5px;
              text-align: center;
            }
            #skilldivthree{
             width: 40vw;
             background-color: wheat;
             margin-left: 2vw;
              border-radius: 5px;
              text-align: center;
            }

        }
      
     

      
      
  }
  #workdiv{
      width:90vw;
      min-height:50vh ;
      background-color: white;
      border-radius: 5px;
      text-align: center;
      margin-left: 2vw;
      #workhr{
          width: 50%;
      }
      #displayworks{
          display: grid;
          margin-top: 8vh;
          row-gap: 2vh;
          .workimg{
                  width: 50%;
                  border:1px solid grey;
                  border-radius: 5px;

              }
              .worklink{
                  text-decoration: none;
                  padding: 5px;
                  background-color: royalblue;
                  color: white;
                  border-radius: 5px;
                }
          
      }
  }
}
</style>