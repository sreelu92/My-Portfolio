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
            src="https://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png"
            alt="email icon"
          />
          <p id="ptagone">sreelu.ph@gmail.com</p>
        </div>
        <div id="two">
          <img
            id="footlinkedin"
            class="footclass"
            src="https://img1.pnghut.com/24/16/7/WkRNFJRqTU/icon-design-resume-brand-social-networking-service-employment.jpg"
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

      // .footclass{
      //     width: 15%;

      // }
      #one {
        display: inline-flex;
        margin-left: 19vw;
        #footemail {
          width: 15%;
        }
      }
      #two {
        display: inline-flex;
        margin-left: 20vw;
        #footlinkedin {
          width: 13%;
        }
        #linkedin {
          text-decoration: none;
          color: black;
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
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

        #one {
          #ptagone {
            font-size: xx-large;
          }
        }
        #two {
          #linkedin {
            font-size: xx-large;
          }
        }
        #three {
          #phonenumber {
            font-size: xx-large;
          }
        }
        #four {
          #footgit {
            width: 9%;
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
        #one {
          #footemail {
            width: 18%;
          }
           #ptagone {
            font-size: x-large;
          }
        }
        #two{
          #footlinkedin{
            width: 15%;
            height: 8vh;
          }
           #linkedin {
            font-size: x-large;
          }

        }
        #three {
          #footphone{
            width: 6%;
            margin-left: 20vw;
          }
          #phonenumber {
            font-size: x-large;
          }
        }
        #four {
          #footgit {
            height: 6vh;
            width: 8%;
            margin-left: 20vw;
          }
          #github {
            font-size: x-large;
          }
        }
      
      }
    }
  }
}
</style>