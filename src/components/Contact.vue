<template>
  <div id="footcontainer">
    <div id="footdivone">
      <h2 id="footh2one">Contact</h2>
      <hr id="foothr" />
      <div id="footcontent">
        <div id="one">
          <img
            id="footemail"
            class="footclass"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9mUgcoDiy6zxT-FHb0Rl09UoLycICmPfpA&usqp=CAU"
            alt="email icon"
          />
          <p id="ptagone">sreelu.ph@gmail.com</p>
        </div>
        <div id="two">
          <img
            id="footlinkedin"
            class="footclass"
            src="https://cdn.iconscout.com/icon/free/png-256/linkedin-1722379-1466165.png"
            alt="linkedn icon"
          />
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/sree-anoob-5589901b6/"
            >LinkedIn</a
          >
        </div>
        <div id="three">
          <img
            id="footphone"
            class="footclass"
            src="https://www.nicepng.com/png/detail/223-2239246_phone-svg-png-icon-free-download-white-phone.png"
            alt="phone icon"
          />
          <a id="phonenumber" href="tel:(587) 937-4881">5879374881</a>
        </div>

        <div id="four">
          <img
            id="footgit"
            class="footclass"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github icon"
          />
          <a id="github" href="tel:(587) 937-4881">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot-page",
};
</script>

<style lang="scss" scoped>
#footcontainer {
  #footdivone {
    width: 90vw;
    min-height: 30vh;
    background-color: white;
    margin-top: 4vh;
    margin-left: 2vw;
    border-radius: 5px;
    #footh2one {
      text-align: center;
    }
    #foothr {
      width: 50%;
    }
    #footcontent {
      margin-top: 6vh;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      row-gap: 2vh;
      justify-items: center;
      align-items: center;

      // .footclass{
      //     width: 15%;

      // }
      #one {
        display: inline-flex;
        margin-left: 19vw;
        #footemail {
          width: 14%;
          height: 5vh;
          margin-top: 2vh;
        }
      }
      #two {
        display: inline-flex;
        margin-left: 20vw;
        #footlinkedin {
          width: 10%;
          height: 4vh;
        }
        #linkedin {
          text-decoration: none;
          color: black;
          margin-top: 1vh;
        }
      }
      #three {
        display: inline-flex;

        #footphone {
          width: 7%;
          margin-left: 21vw;
        }
        #phonenumber {
          text-decoration: none;
          color: black;
        }
      }
      #four {
        display: inline-flex;

        #footgit {
          width: 7%;
          margin-left: 21vw;
        }
        #github {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  @media only screen and(min-width:600px) {
    #footdivone {
      #footh2one {
        font-size: 2.5em;
      }

      #footcontent {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


        #one {
          #ptagone {
            font-size: xx-large;
          }
          #footemail{
            margin-left: -9vw;
          }
        }
        #two {
          #footlinkedin{
            width: 22%;
            height: 7vh;
            margin-left: -3vw;
          }
          #linkedin {
            font-size: xx-large;
            margin-top: 2vh;
          }
        }
        #three {
          #footphone{
            margin-left: 10vw;
          }
          #phonenumber {
            font-size: xx-large;
          }
        }
        #four {
          #footgit {
            width: 9%;
            margin-left: 18vw;
          }
          #github {
            font-size: xx-large;
          }
        }
      }
    }
  }
  @media only screen and(min-width:1020px) {
    #footdivone {
      width: 95%;

      #footcontent {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        #one {
            margin-left: 12vw;

          #footemail {
            width: 30%;
          }
           #ptagone {
            font-size:large;
            margin-top: 3vh;
          }
        }
        #two{
            margin-left: 8vw;

          #footlinkedin{
            width: 20%;
            height: 6vh;
          }
           #linkedin {
            font-size: large;
            margin-top:2vh;
          }

        }
        #three {
          margin-top: 2vh;
            margin-left: -6vw;

          #footphone{
            width:8%;
            height:4vh;

          }
          #phonenumber {
            font-size: large;
          }
        }
        #four {
          #footgit {
            height: 6vh;
            width: 15%;
            margin-left: 3vw;
          }
          #github {
            font-size: large;
            margin-top: 2vh;
          }
        }
      
      }
    }
  }
}
</style>