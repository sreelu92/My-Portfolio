<template>
    <div id="footcontainer">
        <div id="footdivone">
            <h2 id="footh2one">Contact</h2>
            <div id="footcontent">
                <div id="one">
                  <img id="footemail" class="footclass" src="https://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png" alt="email icon">
                   <p>sreelu.ph@gmail.com</p>
                </div>
                <div id="two">
                    <img id="footlinkedin" class="footclass" src="https://img1.pnghut.com/24/16/7/WkRNFJRqTU/icon-design-resume-brand-social-networking-service-employment.jpg" alt="linkedn icon">
                     <a id="linkedin" href="https://www.linkedin.com/in/sree-anoob-5589901b6/">LinkedIn</a>

                </div>

            </div>
            

        </div>


    </div>
</template>

<script>
    export default {
        name:"foot-page"
        
    }
</script>

<style lang="scss" scoped>
#footcontainer{
    #footdivone{
        width: 90vw;
        min-height:30vh;
        background-color: white;
        margin-top:4vh;
        margin-left: 2vw;
        border-radius: 5px;
        #footh2one{
            text-align: center;

        }
        #footcontent{
            margin-top: 8vh;
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
            row-gap: 2vh;
            
            // .footclass{
            //     width: 15%;

                
            // }
            #one{
                display: inline-flex;
                margin-left: 19vw;
                #footemail{
                     width: 15%;


                }
            }
             #two{
                display: inline-flex;
                margin-left: 20vw;
                #footlinkedin{
                    width:13%;


                }
                #linkedin{
                    text-decoration: none;
                    color: black;
                }
            }
        }
    }

}

</style>