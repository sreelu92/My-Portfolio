<template>
  <div id="container">
    
     <img id="mypic" src="@/assets/mypic.jpg" alt="my image">
    <div id="contentcontainer">
        <h3 id="h3one">SREE ANOOB</h3>
        <h4 id="contenth4">FullStack Web Developer</h4>
        <h5 id="h5one">I recently completed diploma in Full Stack Web Development program from InnoTech college.
            I also have bachelor degree in Computer Science and Engineering. My goal is to work in a reputed firm as a professional Full Stack Web Developer where I can use my knowledge and skills. </h5>
        <a id="linkone" href="https://drive.google.com/file/d/1YOHrHiy3oC9KubE86zyKVI-skTDTZ203/view?usp=sharing"> View My Resume</a>
    </div>
    <skill-page></skill-page>
    <work-page></work-page>
    <quote-page></quote-page>
    <foot-page></foot-page>
  </div>
</template>

<script>
import FootPage from "../components/Contact.vue"
import SkillPage from "../components/Skills.vue"
import WorkPage from "../components/Myworks.vue"
import QuotePage from "../components/Quote.vue"
export default {
  name: "welcome-page",
  components: {
      FootPage,
      SkillPage,
      WorkPage,
      QuotePage
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
#container {
 min-height: 120vh;
  background-image: url(https://www.itopstimes.com/wp-content/uploads/2019/08/geometric-1732847_960_720.jpg);
 
 #mypic{
     width:20%;
     border-radius: 10px;
     margin-top: 8vh;
     margin-left: 40vw;
 }
  #contentcontainer {
    min-height: 40vh;
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
   
  @media only screen and(min-width:600px) {
    width: 100%;
    
    #mypic{
      margin-top: 4vh;
    }
    #contentcontainer{
      #h3one{
        font-size: xx-large;
      }
      #contenth4{
        font-size: xx-large;
      }
      #h5one{
        font-size: x-large;
      }
      #linkone{
        font-size: xx-large;
        padding: 10px;
      }

    }

  }
    @media only screen and(min-width:1020px) {
      margin-left: 0vw;
      #mypic{
        width: 10%;
        margin-left: 45%;
      }
      #contentcontainer{
        width:95%;
        height: 40vh;
        #contenth4{
          font-size: x-large;
        }
        #h5one{
          font-size: large;
        }
        #linkone{
          padding: 5px;
          font-size: x-large;
        }
      }

    }


  
}
</style>