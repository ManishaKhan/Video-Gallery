
import './App.css';
import { Media } from './Components';
import { VIDEOS } from './Components';
import { useState } from 'react'
// import { ReactVideoGallery } from './Components/ReactVideoGallery';
// import { VideoCarousel } from './Components/VideoCarousel';
import ImageSlider from './Components/ImageSlider';


function App() {

  const [file, setFile] = useState(null);

  return (
    //     <>
    //     {/* Slider-VIdeos */}

    //     <div className='App'>
    //       <h1> 📽🎥 Video Galley 🎥📽 </h1>
    //       <div className='container'>
    //         <ImageSlider images={VIDEOS} />

    //       </div>

    //     </div>


    // {/* pop-up videos */}
    //     <div className="container">

    //       <div className='media-container'>

    //         {
    //           Media.map((file, index)=>(
    //             <div className="media" key={index} 
    //             onClick={()=>setFile(file)}>
    //               {
    //                 <video src={file.url}></video>

    //               }

    //             </div>
    //           ))
    //         }

    //       </div>

    //       {/* pop-up-video  */}
    //       <div className='popup-media' style={{ display: file ? 'block' : 'none' }}>
    //         <span onClick={() => setFile(null)}>&times;</span>
    //         {
    //           <video src={file?.url} muted autoPlay controls></video>
    //         }
    //       </div>
    //     </div>
    //     </>



    <>


      <div className='App'>
        {/* <div className='nine'>
        <h1>  <span>🎥📽📽🎥</span> Video Galley  <span>🎥📽📽🎥</span></h1>
        </div> */}
        <div class="wrapper">
          <div class="bg">Video Gallery </div>
          <div class="fg"> Video Gallery </div>
        </div>
        <div className='container'>

          {/* Slider-VIdeos */}
          <ImageSlider images={VIDEOS} />



          {/* pop-up videos */}

          <div className="container">
            <div className='nine'>
              <h1>Pop-up Videos <span>🎥📽📽🎥</span></h1>
            </div>

            <div className='media-container'>

              {
                Media.map((file, index) => (


                  // <div class="menu__container">

                  //   <div class="menu">

                  //     <div class="stack">

                  //       <div class="card">



                  //         <div className="media" key={index}
                  //           onClick={() => setFile(file)}>
                  //           {
                  //             <video src={file.url}></video>


                  //           }



                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                  <div class="menu__container">

                    <div class="menu">

                      <div class="box">

                        <div class="card">
                          <div class="imgBx">


                            <div className="media" key={index}
                              onClick={() => setFile(file)}>
                              {
                                <video src={file.url}></video>


                              }



                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))

              }

            </div>

            {/* pop-up-video  */}
            <div className='popup-media' style={{ display: file ? 'block' : 'none' }}>
              <span onClick={() => setFile(null)}>&times;</span>
              {
                <video src={file?.url} muted autoPlay controls></video>
              }
            </div>
          </div>

        </div>


      </div>


    </>

  );
}

export default App;
