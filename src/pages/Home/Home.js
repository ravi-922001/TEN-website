import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="container-fluid">
            <div className="text-center mainpage-image1 mb-4">
                <img src="/pic1.webp" alt="A World of Knowledge at Your Fingertips" width="90%" height="620px" />
                <p className="carousel-caption display-4 text-bottom">A World of Knowledge at Your Fingertips</p>
            </div>

            <div className="text-center mainpage-image2 m-auto">
                <div className="p-3 h4">
                    About Us
                </div>
                <div className="d-flex justify-content-around py-4 pb-5">
                    <div className="image2-content">
                        <p className="h1 mb-4">Learning Together From the Comfort of Your Home</p>
                        <a href="/aboutus">Learn More</a>
                    </div>
                    <div className="border border-dark">
                        <img src="/pic2.webp" alt="Pic" />
                    </div>
                </div>
            </div>

            <div className="text-center my-4 image_animated">
                {/* <img src="/pic_animate.webp" alt="The Next Big Thing" width="90%" /> */}
                    <div>Welcome to</div>
                    <div>THE NEXT BIG THING</div>
                    <br />
                    <a href="https://discord.com/invite/A8zBusy">Join TEN Virtual Campus</a>
            </div>

            <div className="mainpage-image3 m-auto">
                <div className="row">
                    <div className="col-lg-8">
                        <img src="/pic3.webp" alt="Your New Journey Begins Here, Today" />
                    </div>
                    <div className="col-lg-4 text-center images-firstrow-second">
                        <br /><br />
                        <a href="/product-page/entrepreneurship" className="images-link1">Entrepreneurship<br /> made fun</a>
                        <br /><br /><br /><br /><br /><br /><br />
                        <a href="/product-page/entrepreneurship" className="images-link2">Explore Here</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/pic4.webp" alt="Your New Journey Begins Here, Today" />
                    </div>
                    <div className="col-lg-3 text-center">
                        <br /><br /><br />
                        <a href="/product-page/digital-marketing-1" className="images-link1">Digital<br /> Marketing</a>
                        <br /><br /><br /><br /><br />
                        <a href="/product-page/digital-marketing-1" className="images-link2">Explore Here</a>
                    </div>
                    <div className="col-lg-3">
                        <img src="pic5.webp" alt="pic" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <br /><br />
                        <a href="/product-page/product-management-1" className="images-link1">Product Management<br /> like a pro</a>
                        <br /><br /><br /><br /><br /><br />
                        <a href="/product-page/product-management-1" className="images-link2">Explore Here</a>
                    </div>
                    <div className="col-lg-6">
                        <img src="/pic6.webp" alt="Your New Journey Begins Here, Today" />
                    </div>
                </div>
                <div className="course-benefits">
                    Our Course Benefits
                </div>
            </div>

            <div className="text-center our-courses">
                <img src="/our-courses.png" alt="Our Courses" />
            </div>

            <div className="testimonials text-center">
                <div>Testimonials</div>
            </div>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/carousel-bg.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block para1">
        <p class="h3">Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!<br /><br />
​
-Aakriti Malik, DM Intern</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/carousel-bg.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block para2">
        <p class="h3">Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.<br /><br /><br />
         -Harsh Rajput, General Management Intern</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/carousel-bg.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block para3">
        <p class="h3">TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.<br /><br />
        -Anjali Srivastava, Content Intern</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="video-mp4 text-center">
            <video autoPlay muted>
            <source src="/video_homepage.mp4" type="video/mp4"></source>
            Your browser does not support video tag.
            </video>
        </div>

        {/* <div>
            <h1>Power of TEN Consulting</h1>
            <a href="https://www.consulting.entrepreneurshipnetwork.net/">Explore Here</a>
        </div> */}

            
        </div>
    )
}

export default Home
