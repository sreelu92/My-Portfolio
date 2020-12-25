<template>
  <div>
    <div id="workdiv">
      <h2 id="workh2">My Works</h2>
      <hr id="workhr" />
      <div id="displayworks">
        <div id="workdivone">
          <img
            class="workimg"
            src="@/assets/okotoks.jpg"
            alt="snap of okotoks project"
          /><br /><br />
          <a class="worklink" href="https://okotokspizzashop.ml"
            >Okotoks Pizza</a
          >
          <p class="workp">
            Responsive pizza shop website designed with pure HTML and SASS
          </p>
        </div>
        <div id="workdivtwo">
          <img
            class="workimg"
            src="@/assets/tweetter.jpg"
            alt="snap of tweeter project"
          /><br /><br />
          <a class="worklink" href="http://tweetterclone.ml"
            >Tweeter Frontend</a
          >
          <p class="workp">
            Frontend tweeter website designed with HTML,CSS and JavaScript
          </p>
        </div>
        <div id="workdivthree">
          <img
            class="workimg"
            src="@/assets/noteappimage.jpg"
            alt="snap of noteapp project"
          /><br /><br />
          <a class="worklink" href="https://noteapp.ml">Tweeter Frontend</a>
          <p class="workp">
            Full Stack website implemented with HTML,CSS,JavaScript,SQL,Python
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-page",
};
</script>

<style lang="scss" scoped>
#workdiv {
  width: 90vw;
  min-height: 50vh;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  margin-left: 2vw;
  #workhr {
    width: 50%;
  }
  #displayworks {
    display: grid;
    margin-top: 6vh;
    row-gap: 2vh;
    .workimg {
      width: 50%;
      border: 1px solid grey;
      border-radius: 5px;
    }
    .worklink {
      text-decoration: none;
      padding: 5px;
      background-color: royalblue;
      color: white;
      border-radius: 5px;
    }
  }
}
@media only screen and(min-width:600px) {
  #workdiv {
    #workh2 {
      font-size: 2.5em;
    }
    #displayworks {
      .workimg {
        width: 70%;
      }
      .worklink {
        font-size: xx-large;
      }
      .workp {
        font-size: x-large;
      }
    }
  }
}
@media only screen and(min-width:1020px) {
    #workdiv{
        width: 95%;
        #displayworks {
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    .workimg {
      width: 30%;
    }
    .worklink {
      font-size: x-large;
    }
    .workp {
      font-size:larger;
    }
  }

    }
  
}
</style>