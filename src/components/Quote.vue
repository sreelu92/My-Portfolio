<template>
    <div id="quotecontainer">
        <h3 id="quoteh3">Get In Touch</h3>
        <hr id="quotehr">
        <div id="quotediv">
            <h4 class="quotetext" id="nameh4">Name</h4>
            <input class="quoteinput" type="text" id="nameinput">
            <h4 class="quotetext" id="emailh4">Email</h4>
            <input  class="quoteinput" type="text" id="emailinput">
            <h4 class="quotetext" id="messageh4">Message</h4>
            <textarea  id="quotetextarea" cols="30" rows="5"></textarea>
            <button id="sendbutton" @click="send">Send</button>
            <h4 id="statush4">{{status}}</h4>


        </div>


    </div>
</template>

<script>
    export default {
        name:"quote-page",
        data() {
            return {
                status: ""
            };
        },
        methods: {
           send:function(){
               this.status="Message sent successfully"

           }
        },
        
    }
</script>

<style lang="scss" scoped>
#quotecontainer{
    min-height: 40vh;
    width: 90vw;
    background-color: white;
    margin-left: 2.5vw;
    border-radius: 5px;
    #quoteh3{
        text-align: center;
    }
    #quotehr{
        width: 50%;
    }
    #quotediv{
        display: grid;
        justify-items: center;
        align-items: center;
        row-gap: 1vh;
        #sendbutton{
            color: white;
            padding: 5px;
            background-color: royalblue;
            border-radius: 5px;
        }
        
    }
    @media only screen and(min-width:600px) {
        #quoteh3{
            font-size:2.5em;
        }
        .quotetext{
            font-size: xx-large;
        }
        .quoteinput{
            width: 50%;
            height: 5vh;
        }
        #quotediv{
            #quotetextarea{
                line-height: 3vh;
                width: 60%;
            }
             #sendbutton{
            padding: 15px;
            border-radius: 10px;
            font-size: x-large;
        }
        #statush4{
            font-size: xx-large;
        }

        }

    }
    @media only screen and(min-width:1020px) {
        width: 95%;
        min-height: 10vh;
         .quotetext{
            font-size: x-large;
        }
        .quoteinput{
            width: 30%;
            height: 5vh;
        }
         #quotediv{
           
             #sendbutton{
            padding: 15px;
            border-radius: 10px;
            font-size: large;
        }
        #statush4{
            font-size: x-large;
        }

        }

    }



}

</style>