import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white">
      <div className="container" data-aos="fade-up">
        <section>
          <div>
            <p className="text-base text-white/60">Scrivici</p>
            <div className="py-2" />
            <Link href="mailto:classifit.studio@gmail.com" target="_blank"><h2 className="font-semibold after:bg-white">classifit.studio@gmail.com</h2></Link>
          </div>
          <div className="py-12" />
          <div className="lg:flex justify-between items-center">
            <div className="lg:flex gap-24">
              <div className="flex flex-col gap-4">
                <p className="text-base text-white/60">Contatti</p>
                <Link href="tel:+393518039192" className="after:bg-white">+39 351 803 9192</Link>
                <Link href="mailto:classifit.studio@gmail.com" target="_blank" className="after:bg-white">classifit.studio</Link>
              </div>
              <div className="flex flex-col gap-4 mt-12 lg:mt-0">
                <p className="text-base text-white/60">Seguici</p>
                <Link href="https://www.instagram.com/app.classi.fit/" target="_blank" className="after:bg-white">Instagram</Link>
                <Link href="https://www.facebook.com/profile.php?id=61551922481738" target="_blank" className="after:bg-white">Facebook</Link>
              </div>
            </div>
            <div className="lg:text-right mt-24 lg:mt-0">
              <svg
                width="98"
                height="23"
                viewBox="0 0 98 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:ml-auto"
              >
                <path
                  d="M7.27929 22.3113C3.07739 22.3113 0.307256 19.3855 0.307256 14.53C0.307256 9.67444 3.07739 6.74868 7.31041 6.74868C11.0143 6.74868 13.3487 8.92744 13.9401 11.9466L11.9792 12.787C11.6679 10.2658 10.1739 8.42944 7.31041 8.42944C4.35352 8.42944 2.39264 10.5459 2.39264 14.53C2.39264 18.4829 4.35352 20.5994 7.31041 20.5994C10.1739 20.5994 11.6679 18.7941 11.9792 16.273L13.9401 17.1134C13.3487 20.1325 11.0143 22.3113 7.27929 22.3113ZM19.4035 22H17.3492V1.14616H19.4035V22ZM26.6885 22.3113C24.2296 22.3113 22.829 20.9729 22.829 18.9809C22.829 17.02 24.2919 15.775 26.3772 14.8412L32.042 12.2578V12.1333C32.042 9.89232 30.9838 8.58506 28.556 8.58506C26.315 8.58506 24.6965 9.8612 23.9183 11.5108L22.4866 10.0791C23.4203 8.52281 25.5991 6.74868 28.7739 6.74868C32.2599 6.74868 34.0651 8.77182 34.0651 12.1022V19.1054C34.0651 19.8835 34.4075 20.1636 35.1234 20.1636H35.9949V22H34.5943C33.1003 22 32.1043 21.3464 32.1043 19.4477V17.8604C31.6063 20.008 29.6765 22.3113 26.6885 22.3113ZM24.8832 18.7007C24.8832 19.9457 25.817 20.5994 27.2799 20.5994C30.05 20.5994 32.1043 18.4517 32.1043 16.4286V13.783L27.2487 16.0862C25.6302 16.8332 24.8832 17.5802 24.8832 18.7007ZM44.566 22.3113C41.5157 22.3113 38.6522 20.9417 37.7496 18.016L39.2747 16.8644C39.7416 18.8875 41.6091 20.5682 44.6282 20.5682C46.6202 20.5682 47.9275 19.759 47.9275 18.2027C47.9275 16.6465 46.5891 16.0862 44.566 15.6193L42.5429 15.1525C40.3952 14.6233 38.1853 13.6273 38.1853 10.9506C38.1853 8.36719 40.2396 6.74868 43.321 6.74868C46.4957 6.74868 48.5811 8.33606 49.3281 10.4526L47.7719 11.6042C47.0871 9.58107 45.5309 8.46056 43.1965 8.46056C41.3912 8.46056 40.1151 9.30094 40.1151 10.8572C40.1151 12.4135 41.2356 12.9737 43.4144 13.5028L45.4064 14.0008C48.5189 14.779 49.7639 16.0551 49.7639 18.1716C49.7639 21.0351 47.3361 22.3113 44.566 22.3113ZM58.5784 22.3113C55.5281 22.3113 52.6646 20.9417 51.762 18.016L53.2871 16.8644C53.754 18.8875 55.6215 20.5682 58.6406 20.5682C60.6326 20.5682 61.9399 19.759 61.9399 18.2027C61.9399 16.6465 60.6015 16.0862 58.5784 15.6193L56.5552 15.1525C54.4076 14.6233 52.1977 13.6273 52.1977 10.9506C52.1977 8.36719 54.252 6.74868 57.3334 6.74868C60.5081 6.74868 62.5935 8.33606 63.3405 10.4526L61.7843 11.6042C61.0995 9.58107 59.5433 8.46056 57.2089 8.46056C55.4036 8.46056 54.1275 9.30094 54.1275 10.8572C54.1275 12.4135 55.248 12.9737 57.4268 13.5028L59.4188 14.0008C62.5313 14.779 63.7763 16.0551 63.7763 18.1716C63.7763 21.0351 61.3485 22.3113 58.5784 22.3113ZM69.2828 4.38317H67.2285V1.14616H69.2828V4.38317ZM69.2828 22H67.2285V7.05993H69.2828V22ZM76.7234 22H74.7002V8.64731H72.2413V7.05993H74.7002V5.31692C74.7002 2.29779 76.5677 0.834905 79.3379 0.834905C81.6411 0.834905 83.2908 2.04878 83.9755 2.92029L82.855 4.38317C82.1703 3.41829 80.8008 2.54679 79.2445 2.54679C77.6882 2.54679 76.7234 3.38717 76.7234 5.37917V7.05993H84.9715V22H82.9173V8.64731H76.7234V22ZM93.7568 22.3424C91.4847 22.3424 89.7106 20.9106 89.7106 18.2027V8.64731H87.2828V7.05993H89.7106V4.9123L91.7337 3.38717V7.05993H96.7448V8.64731H91.7337V17.6425C91.7337 19.7901 92.8542 20.3815 94.1615 20.3815C95.4998 20.3815 96.5892 19.4166 97.0872 18.3584L97.8031 20.3504C97.1495 21.4397 95.6866 22.3424 93.7568 22.3424Z"
                  fill="white"
                />
              </svg>

              <div className="py-8" />
              <Link href="https://www.iubenda.com/privacy-policy/40888749" target="_blank" className="text-white/60 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="https://www.iubenda.com/privacy-policy/40888749/cookie-policy" target="_blank" className="ml-8 text-white/60 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
