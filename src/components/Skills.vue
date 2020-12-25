<template>
  <div>
    <div id="skillcontainer">
      <h2 id="skillh2one">Skills</h2>
      <hr id="skillhr" />

      <div id="skilldiv">
        <div id="skilldivone">
          <h3 class="fronth3">Frontend:</h3>
          <p class="frontp">HTML</p>
          <p class="frontp">CSS</p>
          <p class="frontp">JavaScript</p>
          <p class="frontp">Vue JS</p>
          <p class="frontp">SASS</p>
        </div>

        <div id="skilldivtwo">
          <h3 class="fronth3">Backend:</h3>
          <p class="frontp">SQL</p>
          <p class="frontp">Python</p>
          <p class="frontp">Flask</p>
          <p class="frontp">APIs</p>
          <p class="frontp">SASS</p>
        </div>

        <div id="skilldivthree">
          <h3 class="fronth3">Relevant:</h3>
          <p class="frontp">Github</p>
          <p class="frontp">Bash</p>
          <p class="frontp">C#</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skill-page",
};
</script>

<style lang="scss" scoped>
#skillcontainer {
  width: 90vw;
  min-height: 40vh;
  background-color: white;
  margin-left: 2.5vw;
  border-radius: 5px;

  #skillh2one {
    text-align: center;
  }
  #skillhr {
    width: 50%;
  }
  #skilldiv {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    row-gap: 3vh;
    margin-top: 6vh;
    #skilldivone {
      width: 40vw;
      background-color: wheat;
      margin-left: 2vw;
      border-radius: 5px;
      text-align: center;
    }
    #skilldivtwo {
      width: 40vw;
      background-color: wheat;
      margin-left: 4vw;
      border-radius: 5px;
      text-align: center;
    }
    #skilldivthree {
      width: 40vw;
      background-color: wheat;
      margin-left: 2vw;
      border-radius: 5px;
      text-align: center;
    }
  }
}
@media only screen and(min-width:600px) {
    #skillcontainer {
        #skillh2one {
            font-size:2.5em;
        }
        #skilldiv{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            .fronth3{
                font-size: xx-large;
            }
            .frontp{
                font-size: x-large;
            }
            
  
        }
    }


}
 @media only screen and(min-width:1020px) {
     #skillcontainer{
         width: 95%;
         #skilldiv{
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
           .fronth3{
                font-size: large;
            }
            .frontp{
                font-size: large;
            }
            #skilldivone{
                width:60%;
            }
            #skilldivtwo{
                width:60%;
            }
            #skilldivthree{
                width:60%;
            }

         }
     }

 }


</style>