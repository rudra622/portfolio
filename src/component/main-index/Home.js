import React from 'react'

function Home() {
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                    <h1>Rudra Dobariya</h1>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Here’s some good news, though: there’s a very easy way to answer the dreaded interview question.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3> Web Developer.</h3>
                            <p className="fst-italic">
                                Here’s some good news, though: there’s a very easy way to answer the dreaded interview question.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>29 june 2004</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+91 95103 16173</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Surat,Gujrat,India.</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>19</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Running</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>PhEmailone:</strong> <span>rudradobariya2862004@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="facts" className="facts">
                <div className="container">
                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>The one type of food you would eat for the rest of your life if you had to pick. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile" />
                                <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="count-box">
                                <i className="bi bi-journal-richtext" />
                                <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={200}>
                            <div className="count-box">
                                <i className="bi bi-headset" />
                                <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" />
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={300}>
                            <div className="count-box">
                                <i className="bi bi-people" />
                                <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" />
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
            <section id="resume" className="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Rudra Dobariya</h4>
                                <p><em>Humble and enthusiastic, I am interested in IT and
                                    everything in its orbit. I recently started getting
                                    fascinated by web programming, e.g. Creating
                                    websites. I gained experience working in this field.
                                    This field complements my studies, I am keen to gain
                                    more experience in this field. For this reason, I am
                                    looking for a company that is willing to offer me a
                                    placement among their developers. In return, I will
                                    offer my full commitment, and be a pleasant and
                                    friendly addition to your team. So I am currently
                                    looking for a job or internship as a front end developer</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(+91) 95103 16173</li>
                                    <li>rudradobariya2862004@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Mauni International School</h4>
                                <h5>2020 - 2021</h5>
                                <p><em>Completed 12th from Mauni International School.</em></p>
                            </div>
                            <div className="resume-item">
                                <h4>Swarrnim Startup & Innovation University</h4>
                                <h5>2021</h5>
                                <p>BCA</p>
                                <p>Bachelors in Computer Application.<br /> (Running)</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Front-End development </h4>
                                <h5>2021 - Present</h5>
                                <p><em>Experion, India, Ind </em></p>
                                <ul>
                                    <li>Good JavaScript Front-end development experience</li>
                                    <li>Experience writing and running automated tests including, but not limited
                                        to, integration and unit</li>
                                    <li>Experience in collaborating with other in a software development team and
                                        conforming to standard practices and code guidelines</li>
                                    <li>Improved code efficiency up to 40 percent by
                                        stocking commonly used functions .</li>
                                    <li>Experience deploying Node.js into production and scaling applications
                                        beyond single instances</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>STRENGTH</h4>
                                <h5>Love for the Industry</h5>
                                <li>Doing my job with great love and
                                    passion helps me stay motivated
                                    at all times.
                                </li><br />
                                <h5>Life-long Learner</h5>
                                <li>Never done learning and always
                                    seeking to improve myself.
                                    Curious about new possibilities
                                    and taking action to explore them</li>
                                <br />
                                <h5>Time-management</h5>
                                <li>Able to divide my time in the most
                                    optimal way possible.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                            <div className="icon"><i className="bi bi-briefcase" /></div>
                            <h4 className="title"><a href>Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                            <div className="icon"><i className="bi bi-card-checklist" /></div>
                            <h4 className="title"><a href>Dolor Sitema</a></h4>
                            <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                            <div className="icon"><i className="bi bi-bar-chart" /></div>
                            <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                            <div className="icon"><i className="bi bi-binoculars" /></div>
                            <h4 className="title"><a href>Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                            <div className="icon"><i className="bi bi-brightness-high" /></div>
                            <h4 className="title"><a href>Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                            <div className="icon"><i className="bi bi-calendar4-week" /></div>
                            <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                            <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row" data-aos="fade-in">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>A-71 sanskar villa soc , sarthana ,surat. </p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>rudradobariya2862004@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 95103 16173</p>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0, width: '100%', height: 290 }} allowFullScreen />
                            </div>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home