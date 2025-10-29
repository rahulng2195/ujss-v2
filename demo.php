<!DOCTYPE html>
<html lang="en">

<head>



  <?php $Page = "Laser Treatment for Hair Removal"; ?>
  <?php include("inc/head.php"); ?>
  <?php include("inc/meta.php"); ?>
  <?php include("inc/css.php"); ?>
  <?php include("inc/slick-carousel.php"); ?>
  <?php include("inc/popup.php"); ?>
  <link rel="stylesheet" href="assets/landing/landing.css" />
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  <script src="https://www.google.com/recaptcha/api.js?render=6Lflm-8qAAAAANZo3C-6NVWquw-zaZ88g244O6T5"></script>
  <script src="./assets/form_captcha/captcha.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

  <meta charset="UTF-8">
  <title> Laser Treatment for Hair Removal Mumbai | Angel Health Clinic</title>
  <meta name="description" content="Safe & effective laser hair removal in Mumbai. Long-lasting smooth skin with dermatologist-led care. Book your consultation today!
">


  <?php include("inc/header.php"); ?>
  <link rel="stylesheet" href="assets/about/about.css">
  <link rel="stylesheet" href="assets/contact/contact.css">
  <link rel="stylesheet" href="assets/services/services.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">


</head>
<style>
  .allHeader {
    display: block
  }

  .IVcontent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
  }

  .IVcontent h1 {
    font-size: 3.5rem;
    font-weight: normal;
    margin-bottom: 20px;
  }

  .IVcontent p {
    font-size: 1rem;
    font-weight: bold;
  }

  .ansPara {
    font-size: 1.2rem;
  }

  .filter-buttons {
    background-color: #622862;
  }

  .filter-buttons a {
    color: white;
    text-decoration: none;
  }

  .filter-buttons.active {
    background-color: #F0E9ED;
  }

  .filter-buttons.active a {
    color: #622862;
  }


  .image-container {
    background-color: #F0E9ED;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
  }



  .decp,
  .purpose,
  .ing {
    font-size: 14px;
    margin-bottom: 3px;
  }

  .Revibg {
    position: absolute;
    background-color: #F0E9ED;
    border-radius: 20px;
    width: 73%;
    height: 100%;
    border-top-left-radius: 5%;
    right: 8%;
  }

  .description {
    font-size: 1.5rem;
  }

  .light-bg {
    background-color: #F0E9ED;
  }

  .lighter-bg {
    background-color: #F9F9F9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }

  .box {
    position: absolute;
    height: 100%;
    height: 100%;
    width: 100%;
    z-index: 0;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .border-dotted {
    height: 270px;
    /* width: 250px; */
    position: relative;
    border: 1px dashed #622862;
    /* top: 10px;
        left: 10px; */
    border-radius: 10px;
  }

  .icon {
    border-radius: 10px;
  }

  .icon svg {
    max-width: 100%;
    height: auto;
  }

  .icon-img {
    height: auto;
    width: 100px;
  }

  .hover-box {
    padding-right: 20px;
  }

  /* Default image visibility */
  .purplIimg {
    display: block;
    transition: opacity 0.3s ease;
  }

  .WhiteImg {
    display: none;
    transition: opacity 0.3s ease;
  }

  /* On hover, toggle image visibility */
  .hover-box:hover .purplIimg {
    display: none;
  }

  .hover-box:hover .WhiteImg {
    display: block;
  }

  /* Icon background color transition */
  .hover-box .icon {
    background-color: #F0E9ED;
    transition: background-color 0.3s ease;
    font-size: 45px;
    font-weight: bold;
  }


  .hover-box:hover .icon {
    background-color: #622862 !important;
    color: white;
  }

  .benefit-box {
    background-color: #622862;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    padding: 50px 0;
    margin-bottom: 30px;
    position: relative;
    height: 280px;
  }

  .benefit-box .benefit-icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fff;
    color: #622862;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    /* border: 3px solid #4B1F66; */
  }

  .benefit-card .benefit-icon {
    /* width: 90px;
        height: 90px; */
    border-radius: 50%;
    background: #fff;
    color: #622862;
    /* display: flex;
        align-items: center;
        justify-content: center; */
    font-size: 28px;
    /* position: absolute;
        top: -35px;
        left: 50%; */
    transform: translateX(-50%);
    /* border: 3px solid #4B1F66; */
  }

  .benefit-title {
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #fff;
    width: 100%;
    color: #622862;
    padding: 10px 0;
    text-transform: uppercase;

  }

  .rev-with-iv-content {
    padding: 25px;
  }

  .filter-bg-img {
    position: absolute;
    background-image: url('assets/landing/blurred-abstract-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 20%;
    top: 0;
    left: 0;
    z-index: 1;
    /* opacity: 0.1; */
  }


  @media (max-width: 768px) {
    .header .container {
      padding: 10px 15px !important;
    }

    .navbar-brand .logo-txt,
    .navbar-brand img {
      padding: 0 10px !important;
    }

    .IVcontent {
      width: 100% !important;
    }

    .IVcontent h1 {
      font-size: 2rem;
    }

    .IVcontent p {
      font-size: 1rem;
    }

    .what-is-iv {
      margin: 0 !important;
    }

    .what-is-iv img {
      width: 100% !important;
    }

    .buttons {
      gap: 10px !important;
    }

    .filter-buttons {
      padding: 10px 15px !important;
      font-size: 12px !important;
    }

    .filtered-cards .cards.mx-2,
    .why-choose-us {
      margin: 0 auto !important;
    }

    .image-container {
      width: 100% !important;
    }

    .Revibg {
      width: 100% !important;
      right: 0 !important;
    }

    .rev-with-iv-content {
      padding: 25px;
    }
  }

  @media (max-width:600px) {
    .IVcontent {
      top: 62%;
    }

    .IVcontent h1 {
      font-size: 1rem;
    }

    .IVcontent p {
      font-size: 0.5rem;
    }
  }

  @media (min-width:1920px) {
    .container {
      max-width: 80% !important;
    }

    p,
    span {
      font-size: 1vw !important;
    }

    .title {
      font-size: 1.2vw !important;
    }

    .benefit-title {
      font-size: 1vw !important;
    }

    .benefit-desc {
      font-size: 1vw !important;
    }

    .title.fw-bold {
      font-weight: 900 !important;
    }
  }

  .benefit-desc {
    padding-left: 20px;
    padding-right: 20px;
  }


  /* Section 1: Key Features & Benefits */
  .benefits-section {
    padding: 60px 0;
    background-color: var(--white);
  }

  .benefits-header {
    background-color: var(--primary-purple);
    color: var(--white);
    padding: 15px 30px;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 600;
  }

  .benefits-content {
    background-color: var(--light-pink);
    padding: 40px 30px;
    border-radius: 0 0 10px 10px;
  }

  .benefits-title {
    text-align: center;
    color: var(--primary-purple);
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }

  .benefit-card {
    background-color: var(--white);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-5px);
  }

  .benefit-icon {
    color: var(--primary-purple);
    font-size: 24px;
    margin-right: 15px;
    flex-shrink: 0;
  }

  .benefit-text {
    color: var(--primary-purple);
    font-size: 15px;
    margin: 0;
    font-weight: 500;
  }

  /* Section 2: Combo Offer */
  .combo-section {
    padding: 60px 0;
    background-color: var(--white);
  }

  .combo-header {
    background-color: var(--primary-purple);
    color: var(--white);
    padding: 15px 30px;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 600;
  }

  .combo-content {
    background-color: var(--light-pink);
    /* padding: 40px 30px; */
    border-radius: 0 0 10px 10px;
  }

  .combo-title {
    text-align: center;
    color: var(--primary-purple);
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 40px;
  }

  .offer-box {
    background: #F0E9ED;
    color: var(--color-04);
    padding: 40px;
    border-radius: 15px;
    height: 100%;
  }

  .offer-badge {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--white);
    padding: 8px 20px;
    border-radius: 25px;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .offer-box h3 {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .offer-box p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 25px;
  }

  .offer-btn {
    background-color: var(--white);
    color: #d9534f;
    padding: 12px 30px;
    border-radius: 25px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .offer-btn:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }

  .benefits-box {
    background-color: var(--white);
    padding: 30px;
    border-radius: 15px;
    height: 100%;
  }

  .benefits-box-title {
    color: var(--primary-purple);
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .benefit-item {
    background-color: #f8d7da;
    color: var(--primary-purple);
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
  }

  .benefit-item-alt {
    background-color: #fac8c8;
    color: var(--primary-purple);
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 500;
  }

  /* Why Choose Section - Updated to match the design */
  .why-choose-section {
    padding: 60px 0;
    background-color: var(--light-pink);
    /* Light pink background */
  }

  .why-choose-section .sc_h2 {
    color: var(--primary-purple);
    font-weight: 600;
    margin-bottom: 40px;
    font-size: 2rem;
  }

  .why-choose-content {
    background-color: transparent;
    padding: 0;
  }

  .why-choose-box {
    background-color: var(--white);
    padding: 50px 60px;
    border-radius: 15px;
    max-width: 900px;
    margin: 0 auto;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  .feature-item:last-of-type {
    margin-bottom: 40px;
  }

  .feature-icon {
    color: var(--primary-purple);
    font-size: 24px;
    margin-right: 20px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .feature-content h4 {
    color: var(--primary-purple);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 0;
  }

  .feature-content p {
    color: var(--text-gray);
    font-size: 15px;
    margin: 0;
    line-height: 1.7;
  }

  .contact-btn {
    background-color: #622862;
    color: var(--white);
    padding: 14px 50px;
    border-radius: 5px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    transition: all 0.3s ease;
  }

  /* .contact-btn:hover {
            background-color: #c9302c;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(217, 83, 79, 0.3);
        } */

  /* Responsive Design */
  @media (max-width: 992px) {
    .why-choose-box {
      padding: 40px 40px;
    }

    .why-choose-section .sc_h2 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    .why-choose-section {
      padding: 40px 0;
    }

    .why-choose-section .sc_h2 {
      font-size: 1.5rem;
      margin-bottom: 30px;
      padding: 0 15px;
    }

    .why-choose-box {
      padding: 30px 25px;
      margin: 0 15px;
    }

    .feature-item {
      margin-bottom: 25px;
    }

    .feature-item:last-of-type {
      margin-bottom: 30px;
    }

    .feature-icon {
      font-size: 20px;
      margin-right: 15px;
    }

    .feature-content h4 {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .feature-content p {
      font-size: 14px;
      line-height: 1.6;
    }

    .contact-btn {
      padding: 12px 40px;
      font-size: 15px;
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .why-choose-box {
      padding: 25px 20px;
    }

    .why-choose-section .sc_h2 {
      font-size: 1.3rem;
    }

    .feature-content h4 {
      font-size: 15px;
    }

    .feature-content p {
      font-size: 13px;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {

    .benefits-header,
    .combo-header,
    .why-choose-header {
      padding: 12px 20px;
      font-size: 16px;
    }

    .benefits-content,
    .combo-content,
    .why-choose-content {
      padding: 30px 20px;
    }

    .benefits-title,
    .why-choose-title {
      font-size: 20px;
    }

    .combo-title {
      font-size: 22px;
    }

    .benefit-card {
      padding: 15px;
    }

    .benefit-text {
      font-size: 14px;
    }

    .offer-box,
    .benefits-box {
      margin-bottom: 20px;
    }

    .offer-box {
      padding: 30px 20px;
    }

    .benefits-box {
      padding: 25px 20px;
    }

  }
</style>



<body>

  <div class="page-wrp overflow-visible position-static">
    <section class="position-relative banerCont pt-5 mt-5 about-sec-hero ">
      <img class="w-100 hBanner" src="assets/landing/iv-banner.png" alt="banner">
      <div class="IVcontent">
        <h1>Laser Treatment for Hair Removal in Mumbai | Silken Smooth Therapy
        </h1>
        <p>SAFE, EFFECTIVE, AND LONG-TERM HAIR REDUCTION WITH EXPERT CARE</p>
      </div>
    </section>

    <section class=" my-5">
      <div class="row justify-content-center what-is-iv">
        <div class="col-md-5 col-12">
          <h1> Silken Smooth Confidence, Why Laser Hair Removal Is Worth It
          </h1>
          <P class="ansPara">Tired of painful waxing sessions, constant shaving, or messy hair removal creams? At Angel Health & Aesthetic Clinic, Mumbai, we offer Silken Smooth Laser Hair Removal Therapy a safe, effective, and long-term solution for unwanted hair.
          </P>
          <P class="ansPara">Unlike temporary methods, laser treatment for hair removal targets hair at the root, reducing regrowth and giving you smoother skin with minimal discomfort.
          </P>
          <P class="ansPara">This advanced therapy is suitable for both men and women, and works effectively on different body areas including face, underarms, arms, legs, bikini line, and back. If you’ve been searching for laser hair removal in Mumbai, our clinic provides world-class technology with dermatologist-led care for the best results.
          </P>
        </div>
        <div class="col-md-5 col-12">
          <img class="w-100" src="assets/landing/Group 205.png" alt="">
        </div>
      </div>
    </section>

    <section class="py-5 text-center">
      <h2>WHAT IS LASER TREATMENT FOR HAIR REMOVAL AND WHY DO YOU NEED IT?</h2>
      <p class="description">
        Traditional hair removal methods are time-consuming, painful, and often cause side effects like ingrown hair, skin darkening, or irritation. Laser hair removal treatment solves these issues by:
      </p>

      <div class="container my-5">
        <div class="row text-center justify-content-center px-5" style="row-gap: 40px;">

          <div class="col-md-3 col-sm-6 col-12">
            <div class="benefit-box">
              <div class="benefit-icon">
                <img class="w-100 p-3" src="assets/landing/Group 121.svg" alt="Targets Hair Follicle">
              </div>
              <div class="benefit-title">Targeting the hair follicle directly using advanced laser technology</div>
              <div class="benefit-desc">
                Uses advanced laser technology to reach and disable the hair root beneath the skin's surface.
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12">
            <div class="benefit-box">
              <div class="benefit-icon">
                <img class="w-100 p-3" src="assets/landing/Group 121.svg" alt="Slows Regrowth">
              </div>
              <div class="benefit-title">Slowing down regrowth with each session</div>
              <div class="benefit-desc">
                Noticeable reduction in hair growth and density with each subsequent session, leading to long-term smoothness.
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12">
            <div class="benefit-box">
              <div class="benefit-icon">
                <img class="w-100 p-3" src="assets/landing/Group 121.svg"
                  alt="Smoother Skin">
              </div>
              <div class="benefit-title">Providing smoother skin that lasts longer</div>
              <div class="benefit-desc">
                Delivers skin that lasts longer and is free from the stubble and rough texture caused by shaving or waxing.
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-12">
            <div class="benefit-box">
              <div class="benefit-icon">
                <img class="w-100 p-3" src="assets/landing/Group 121.svg" alt="Reduces Risk">
              </div>
              <div class="benefit-title">Reducing the risk of bumps, cuts, or rashes</div>
              <div class="benefit-desc">
                Eliminates the common side effects of traditional methods, such as bumps, cuts, rashes, or ingrown hairs.
              </div>
            </div>
          </div>

        </div>
      </div>

      <p class="description px-5 mt-4">
        Whether you’re dealing with thick, coarse hair or fine, stubborn strands, professional laser treatment for hair removal ensures safe and effective results under expert supervision.
      </p>
    </section>



    <section class="services-sec-04 bg-white position-relative">
      <div class="container custCont">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <h2 class="sc_h2">How Silken Smooth Laser Hair Removal Works</h2>

            <div class="col-md-12">
              <div class="np-content flex-wrap grid portfolioContainer">

                <div class="color-shape treatment-list col-md-6">
                  <div class="overlay_01"></div>
                  <div class="tl_box">
                    <div class="t_heading">
                      <h4 class="fw-bold">Target: Anagen (Growth) Phase</h4>
                    </div>
                    <div class="t_para">
                      <p>Only follicles in active growth respond to laser. Multiple sessions are needed to catch all hairs during their anagen cycles for maximum efficacy.</p>
                    </div>
                  </div>
                </div>

                <div class="color-shape treatment-list col-md-6">
                  <div class="overlay_01"></div>
                  <div class="tl_box">
                    <div class="t_heading">
                      <h4 class="fw-bold">Wavelength & Device Matter</h4>
                    </div>
                    <div class="t_para">
                      <p>Devices commonly used include Diode and Nd:YAG lasers. For darker Indian skin tones, 1064 nm Nd:YAG is often preferred because its deeper penetration and lower epidermal absorption reduce the risk of pigment changes. Device parameters (pulse duration, fluence, cooling) are adjusted to each skin/hair type.</p>
                    </div>
                  </div>
                </div>

                <div class="color-shape treatment-list col-md-6">
                  <div class="overlay_01"></div>
                  <div class="tl_box">
                    <div class="t_heading">
                      <h4 class="fw-bold">Cooling systems reduce discomfort.</h4>
                    </div>
                    <div class="t_para">
                      <p>Integrated cooling or cold air reduces heat and pain, making sessions comfortable</p>
                    </div>
                  </div>
                </div>

                <div class="color-shape treatment-list col-md-6">
                  <div class="overlay_01"></div>
                  <div class="tl_box">
                    <div class="t_heading">
                      <h4 class="fw-bold">Permanent hair reduction (not instant “permanent removal”).</h4>
                    </div>
                    <div class="t_para">
                      <p>Most patients experience substantial long-term reduction (many see 70–90% less hair) after a full course; occasional maintenance may be needed.</p>
                    </div>
                  </div>
                </div>

                <div class="color-shape treatment-list lastCol col-md-6"
                  style="left: 0 !important; position: relative;">
                  <div class="overlay_01"></div>
                  <div class="tl_box">
                    <div class="t_heading">
                      <h4 class="fw-bold">Permanent Hair Reduction</h4>
                    </div>
                    <div class="t_para">
                      <p>It results in substantial long-term reduction (many see 70–90% less hair) after a full course, though occasional maintenance may be needed.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

    </section>



    <section>
      <div class="container">
        <div class="heading text-center mx-5 why-choose-us">
          <h2>
            STEP-BY-STEP LASER HAIR REMOVAL PROCESS
          </h2>
          <p class="description">
            When you choose our clinic, here’s the process to achieving permanent hair reduction:
          </p>
        </div>

        <div class="row justify-content-evenly align-items-center">
          <div class="col-md-6 col-12">
            <div class="py-5">

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  1
                </div>
                <div>
                  <p class="description m-0">INITIAL CONSULTATION & SKIN/HAIR ASSESSMENT</p>
                  <span>Medical history, Fitzpatrick skin type, hair characteristics, and realistic outcome discussion. Baseline photos are taken.</span>
                </div>
              </div>

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  2
                </div>
                <div>
                  <p class="description m-0">PRE-TREATMENT PREPARATION (7–14 days before)</p>
                  <span>Avoid sun exposure and tanning; stop waxing/plucking (shaving is allowed), avoid self-tanners. Follow dermatologist medication guidance.</span>
                </div>
              </div>

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  3
                </div>
                <div>
                  <p class="description m-0">TEST PATCH (Optional/Recommended)</p>
                  <span>A small area is test-treated to confirm comfort and safety, which is especially important for darker skin.</span>
                </div>
              </div>

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  4
                </div>
                <div>
                  <p class="description m-0">ACTIVE LASER SESSIONS</p>
                  <span>Sessions spaced 4–8 weeks apart depending on the body area and hair growth cycle. The laser is delivered with cooling applied.</span>
                </div>
              </div>

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  5
                </div>
                <div>
                  <p class="description m-0">IMMEDIATE AFTERCARE</p>
                  <span>Cool compress, soothing gel, and sunscreen if exposed. Minor redness or transient swelling is normal and resolves in hours to a few days.</span>
                </div>
              </div>

              <div class="d-flex align-items-center hover-box" style="gap:20px; margin-bottom:20px;">
                <div class="icon d-flex justify-content-center align-items-center p-3"
                  style="width:80px; height:80px;">
                  6
                </div>
                <div>
                  <p class="description m-0">FOLLOW-UP & MAINTENANCE</p>
                  <span>Most patients complete 6–8 sessions. Annual touch-ups may be recommended to maintain the smooth skin.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>


    <!-- <section class="my-5">
            <h2 class="text-center">KEY FEATURES OF OUR LASER HAIR REMOVAL</h2>
            <div class="lighter-bg shadow-sm py-5">
                <div class="container">
                    <div class="row justify-content-center align-items-center px-5" style="row-gap:50px;">

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">DERMATOLOGIST-LED PROTOCOLS</h6>
                                    <span>Treatments planned and supervised by experienced dermatologists to maximize safety and outcome.</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">MEDICAL-GRADE LASERS</h6>
                                    <span>Machines calibrated for Indian skin tones to minimize post-inflammatory hyperpigmentation.</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">CUSTOM SETTINGS</h6>
                                    <span>Each session is tuned to your Fitzpatrick skin type, hair color, and hair thickness for personalized results.</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">COMFORT-FIRST APPROACH</h6>
                                    <span>Pre-cooling, topical numbing if required, and post-care to ensure you remain comfortable throughout the treatment.</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">Fast sessions & flexible scheduling</h6>
                                    <span>Small areas (upper lip) in 10–15 minutes, larger areas (legs/back) up to 60 minutes.</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-6 col-12 pl-0">
                            <div class="border-dotted">
                                <div class="box position-relative light-bg p-4 text-center">
                                    <h6 class="fw-bold">Hygienic clinical standards</h6>
                                    <span> Sterile, medically compliant environment and documented protocols.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section> -->


    <section class="benefits-section">
      <div class="container">
        <h2 class="sc_h2 text-center">Benefits of Laser Hair Removal at Angel Clinic</h2>
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="benefits-content">
              <!-- <h3 class="benefits-title">Choosing professional Hyperpigmentation Treatment in Mumbai at Angel Health & Aesthetic Clinic offers the safest and most effective path to a clear complexion:</h3> -->
              <div class="row">
                <div class="col-md-6">
                  <div class="benefit-card d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">Permanent hair reduction with visible results after just a few sessions.</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="benefit-card  d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">Smooth, even-toned skin without razor bumps or ingrown hair.</p>

                  </div>
                </div>
                <div class="col-md-6">
                  <div class="benefit-card  d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">No downtime – you can resume daily activities right after treatment. </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="benefit-card  d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">Cost-effective in the long run compared to years of waxing/shaving. </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="benefit-card  d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">Hygienic and precise treatment under dermatological supervision. </p>
                  </div>
                </div>
                <!-- <div class="col-md-6">
                  <div class="benefit-card  d-flex">
                    <i class="fas fa-check-circle benefit-icon px-2"></i>
                    <p class="benefit-text">Medical oversight: Treatments prescribed and performed by dermatologists for safety and accountability.</p>
                  </div>
                </div> -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="combo-section">
        <div class="container">
            <h2 class="sc_h2 text-center">Who Is Laser Hair Removal Suitable For?</h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="combo-content">
                        <!-- <h3 class="combo-title">Our Hyperpigmentation Treatment in Mumbai is ideal for</h3> -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="benefits-box">
                                    <h4 class="benefits-box-title">Ideal candidates include:</h4>
                                    <div class="benefit-item">
                                       Men and women with unwanted hair on face or body.
                                    </div>
                                    <div class="benefit-item-alt">
                                        Those tired of frequent waxing, shaving, or threading.
                                    </div>
                                    <div class="benefit-item">
                                        Individuals prone to ingrown hair or razor burns. 
                                    </div>
                                    <div class="benefit-item">
                                        Anyone looking for a safe, long-term hair reduction method. 
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="benefits-box">
                                    <h4 class="benefits-box-title">Not suitable for:</h4>
                                    <div class="benefit-item">
                                        Pregnant or breastfeeding women (postpone until after pregnancy). 
                                    </div>
                                    <div class="benefit-item-alt">
                                        Active skin infections, open wounds or severe dermatitis.
                                    </div>
                                    <div class="benefit-item">
                                        People on photosensitising medications or recent isotretinoin use.
                                    </div>
                                    <div class="benefit-item">
                                        Very light blonde, red, white or gray hair may not absorb enough laser energy for effective reduction.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="why-choose-section">
        <div class="container">
            <h2 class="sc_h2 text-center">  Why Choose Angel Health & Aesthetic Clinic for Laser Hair Removal in Mumbai? </h2>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="why-choose-content">
                        <div class="why-choose-box">
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Dermatologist-led team:</h4>
                                    <p>treatments planned/executed under Dr. Purnima Mhatre and our clinical dermatology staff (20+ years of combined experience in aesthetic dermatology). </p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Proven technology:</h4>
                                    <p>high-end, medical-grade laser systems selected for safety on Indian skin.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Personalised care:</h4>
                                    <p>individualized plans based on hair type, medical history and lifestyle. </p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Documented outcomes:</h4>
                                    <p>before/after photography and consistent follow-up.</p>
                                </div>
                            </div>
                            <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Sterile, medical environment:</h4>
                                    <p>Sterile, medical environment and patient-first support with clear pre/post instructions and reachable aftercare.</p>
                                </div>
                            </div>
                            <!-- <div class="feature-item">
                                <i class="fas fa-check-circle feature-icon"></i>
                                <div class="feature-content">
                                    <h4>Reputation & certifications:</h4>
                                    <p>Experienced team, patient testimonials, and continuing medical education (list specific awards/certs on clinic site). </p>
                                </div>
                            </div> -->

                            <p> Ready to experience silky smooth skin without the hassle of waxing or shaving? Book your appointment for laser treatment for hair removal at Angel Health & Aesthetic Clinic in Mumbai today. Call us now or fill out our online form to get started. </p>
                            <a href="/contact-angel-healthcare.php"><button class="contact-btn">Contact Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="faqs-services">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto text-center">
            <h3 class="sc_h2">FAQs on Laser Treatment for Hair Removal</h3>
          </div>
          <div class="col-md-4 mx-auto text-center">
            <div class="seprator-color">
              <div class="s-star"></div>
              <div class="s-line"></div>
            </div>
          </div>
          <div class="col-md-9 mx-auto">
            <div class="accordion" id="accordionExample-02">

              <div class="card color-shape Skin">
                <div class="card-header" id="heading_0-11">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse_0-11" aria-expanded="false"
                    aria-controls="collapse_0-11">
                    <span class="acc_txt">1. Is laser hair removal permanent?</span>
                    <span class="acc_arrow"></span>
                  </button>
                </div>
                <div id="collapse_0-11" class="collapse" aria-labelledby="heading_0-11"
                  data-parent="#accordionExample-02">
                  <div class="card-body">
                    <p>It offers long-term reduction, with most patients experiencing 80–90% less hair after multiple sessions.</p>
                  </div>
                </div>
              </div>

              <div class="card color-shape Skin">
                <div class="card-header" id="heading_0-12">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse_0-12" aria-expanded="false"
                    aria-controls="collapse_0-12">
                    <span class="acc_txt">2. Is it painful?</span>
                    <span class="acc_arrow"></span>
                  </button>
                </div>
                <div id="collapse_0-12" class="collapse" aria-labelledby="heading_0-12"
                  data-parent="#accordionExample-02">
                  <div class="card-body">
                    <p>No, most patients describe it as a mild tingling or warm sensation. Cooling systems ensure comfort.</p>
                  </div>
                </div>
              </div>

              <div class="card color-shape Skin">
                <div class="card-header" id="heading_0-13">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse_0-13" aria-expanded="false"
                    aria-controls="collapse_0-13">
                    <span class="acc_txt">3. How many sessions are needed?</span>
                    <span class="acc_arrow"></span>
                  </button>
                </div>
                <div id="collapse_0-13" class="collapse" aria-labelledby="heading_0-13"
                  data-parent="#accordionExample-02">
                  <div class="card-body">
                    <p>Typically, 6–8 sessions spaced a few weeks apart for optimal results.</p>
                  </div>
                </div>
              </div>

              <div class="card color-shape Skin">
                <div class="card-header" id="heading_0-14">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse_0-14" aria-expanded="false"
                    aria-controls="collapse_0-14">
                    <span class="acc_txt">4. Can men also get laser hair removal?</span>
                    <span class="acc_arrow"></span>
                  </button>
                </div>
                <div id="collapse_0-14" class="collapse" aria-labelledby="heading_0-14"
                  data-parent="#accordionExample-02">
                  <div class="card-body">
                    <p>Yes, it’s equally effective for men looking to treat areas like chest, back, beard shaping, or arms.</p>
                  </div>
                </div>
              </div>

              <div class="card color-shape Skin">
                <div class="card-header" id="heading_0-15">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                    data-target="#collapse_0-15" aria-expanded="false"
                    aria-controls="collapse_0-15">
                    <span class="acc_txt">5. Is there any downtime?</span>
                    <span class="acc_arrow"></span>
                  </button>
                </div>
                <div id="collapse_0-15" class="collapse" aria-labelledby="heading_0-15"
                  data-parent="#accordionExample-02">
                  <div class="card-body">
                    <p>No. Mild redness may occur but usually subsides within a few hours. You can return to normal activities immediately.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


  </div>


  <?php include("inc/footer.php"); ?>
  <?php include("inc/isotope.php"); ?>
  <?php include("inc/script.php"); ?>
  <script src="assets/about/about.js"></script>
  <script src="assets/templates/plugins/html5lightbox/jquery.js"></script>
  <script src="assets/templates/plugins/html5lightbox/html5lightbox.js"></script>
  <?php include("inc/copyright.php"); ?>


  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const buttons = document.querySelectorAll('.toggle-btn');

      buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          // Find the closest card wrapper
          const card = btn.closest('.cards');
          // Find the ingredients paragraph inside this card
          const ing = card.querySelector('.ing');

          if (ing.classList.contains('d-none')) {
            ing.classList.remove('d-none');
            btn.textContent = '...read less';
          } else {
            ing.classList.add('d-none');
            btn.textContent = '...read more';
          }
        });
      });
    });
  </script>


</body>

</html>