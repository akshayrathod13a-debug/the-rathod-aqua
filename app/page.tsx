import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-blue-900 text-white shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    <div className="flex items-center gap-3">
      <Image
  src="/logo.png"
  alt="THE RATHOD AQUA"
  width={60}
  height={60}
  className="rounded-full"
/>
      <div>
        <h1 className="text-2xl font-bold">
          THE RATHOD AQUA
        </h1>

        <p className="text-blue-200 text-sm">
          Pure Water • Healthy Life
        </p>
      </div>
    </div>

    <div className="hidden md:flex gap-8 font-semibold">
      <a href="#home" className="hover:text-yellow-300">Home</a>
      <a href="#about" className="hover:text-yellow-300">About</a>
      <a href="#products" className="hover:text-yellow-300">Products</a>
      <a href="#contact" className="hover:text-yellow-300">Contact</a>
    </div>

  </div>
</nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 text-white"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">

          {/* Left Side */}

          <div>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              PURE WATER
              <br />
              HEALTHY LIFE
            </h2>

            <p className="mt-8 text-xl text-blue-100">
              Premium Packaged Drinking Water
              for Homes, Offices,
              Hotels & Events.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919975285074"
                className="bg-white text-blue-900 px-7 py-3 rounded-full font-bold hover:bg-yellow-300"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919975285074"
                target="_blank"
                className="bg-green-500 px-7 py-3 rounded-full font-bold hover:bg-green-600"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <Image
              src="/hero-bottle.png"
              alt="Hero Bottle"
              width={430}
              height={520}
              priority
            />

          </div>

        </div>

      </section>
       {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <Image
              src="/logo.png"
              alt="THE RATHOD AQUA"
              width={350}
              height={350}
              className="mx-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              About THE RATHOD AQUA
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-8">
              THE RATHOD AQUA provides safe, hygienic and premium packaged
              drinking water. We supply water for homes, offices, hotels,
              schools, functions and businesses with trusted quality and
              timely delivery.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-blue-100 rounded-xl p-5 text-center">
                💧
                <h3 className="font-bold mt-2">100% Pure</h3>
              </div>

              <div className="bg-blue-100 rounded-xl p-5 text-center">
                🚚
                <h3 className="font-bold mt-2">Fast Delivery</h3>
              </div>

              <div className="bg-blue-100 rounded-xl p-5 text-center">
                🧪
                <h3 className="font-bold mt-2">Quality Tested</h3>
              </div>

              <div className="bg-blue-100 rounded-xl p-5 text-center">
                ⭐
                <h3 className="font-bold mt-2">Trusted Brand</h3>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      
        <section id="products" className="py-20 bg-sky-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900">
      Our Products
    </h2>

    <p className="text-center text-gray-600 mt-3">
      Available in Different Sizes
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      {/* 250ml */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 duration-300">
        <Image
          src="/bottle-250.png"
          alt="250ml Bottle"
          width={180}
          height={180}
          className="mx-auto"
        />

        <h3 className="text-2xl font-bold mt-4">
          250ml Bottle
        </h3>

        <p className="text-gray-600 mt-2">
          Pure drinking water for daily refreshment.
        </p>

        <a
          href="https://wa.me/919975285074"
          className="inline-block mt-5 bg-blue-900 text-white px-6 py-2 rounded-full"
        >
          Order Now
        </a>
      </div>

      {/* 500ml */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 duration-300">
        <Image
          src="/bottle-500.png"
          alt="500ml Bottle"
          width={180}
          height={180}
          className="mx-auto"
        />

        <h3 className="text-2xl font-bold mt-4">
          500ml Bottle
        </h3>

        <p className="text-gray-600 mt-2">
          Fresh, hygienic and premium packaged water.
        </p>

        <a
          href="https://wa.me/919975285074"
          className="inline-block mt-5 bg-blue-900 text-white px-6 py-2 rounded-full"
        >
          Order Now
        </a>
      </div>

      {/* 1 Litre */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 duration-300">
        <Image
          src="/bottle-1l.png"
          alt="1 Litre Bottle"
          width={180}
          height={180}
          className="mx-auto"
        />

        <h3 className="text-2xl font-bold mt-4">
          1 Litre Bottle
        </h3>

        <p className="text-gray-600 mt-2">
          Premium quality drinking water for everyone.
        </p>

        <a
          href="https://wa.me/919975285074"
          className="inline-block mt-5 bg-blue-900 text-white px-6 py-2 rounded-full"
        >
          Order Now
        </a>
      </div>

    </div>

  </div>
</section><section id="gallery" className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900">
      Our Gallery
    </h2>

    <p className="text-center text-gray-600 mt-3">
      Premium Packaged Drinking Water
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

      <Image
        src="/bottle-250.png"
        alt="250ml Bottle"
        width={300}
        height={300}
        className="rounded-xl shadow-lg hover:scale-105 duration-300"
      />

      <Image
        src="/bottle-500.png"
        alt="500ml Bottle"
        width={300}
        height={300}
        className="rounded-xl shadow-lg hover:scale-105 duration-300"
      />

      <Image
        src="/bottle-1l.png"
        alt="1L Bottle"
        width={300}
        height={300}
        className="rounded-xl shadow-lg hover:scale-105 duration-300"
      />

      <Image
        src="/about-water.png"
        alt="Water Plant"
        width={300}
        height={300}
        className="rounded-xl shadow-lg hover:scale-105 duration-300"
      />

    </div>

  </div>

</section>
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900">
      Why Choose THE RATHOD AQUA?
    </h2>

    <p className="text-center text-gray-600 mt-4">
      We provide safe, hygienic and premium quality packaged drinking water.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-5xl">💧</div>
        <h3 className="text-xl font-bold mt-4">100% Pure Water</h3>
        <p className="text-gray-600 mt-3">
          RO + UV purified drinking water.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-5xl">🧪</div>
        <h3 className="text-xl font-bold mt-4">Quality Tested</h3>
        <p className="text-gray-600 mt-3">
          Every bottle is quality checked.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-5xl">🚚</div>
        <h3 className="text-xl font-bold mt-4">Fast Delivery</h3>
        <p className="text-gray-600 mt-3">
          Quick delivery for homes and businesses.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-5xl">🤝</div>
        <h3 className="text-xl font-bold mt-4">Trusted Service</h3>
        <p className="text-gray-600 mt-3">
          Customer satisfaction is our priority.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="py-20 bg-sky-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-900">
      Customer Reviews
    </h2>

    <p className="text-center text-gray-600 mt-4">
      What Our Customers Say
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          Excellent quality drinking water and very fast delivery.
        </p>
        <h3 className="mt-5 font-bold text-blue-900">
          – Happy Customer
        </h3>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          Clean, hygienic and trusted packaged drinking water.
        </p>
        <h3 className="mt-5 font-bold text-blue-900">
          – Local Business
        </h3>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-yellow-500 text-2xl">★★★★★</div>
        <p className="mt-4 text-gray-700">
          Best packaged drinking water service in our area.
        </p>
        <h3 className="mt-5 font-bold text-blue-900">
          – Regular Customer
        </h3>
      </div>

    </div>

  </div>
</section>
       {/* ================= CONTACT ================= */}

     <section
  id="contact"
  className="bg-blue-900 text-white py-20"
>
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Contact THE RATHOD AQUA
    </h2>

    <p className="text-xl mb-3">
      📞 <strong>Mobile:</strong> 9975285074
    </p>

    <p className="text-xl mb-3">
      💬 <strong>WhatsApp:</strong> 9975285074
    </p>

    <p className="text-xl mb-3">
      📧 <strong>Email:</strong> therathodaqua@gmail.com
    </p>

    <p className="text-xl mb-8">
      📍 <strong>Address:</strong><br />
      Sonwadi, Tal. Daund,<br />
      Dist. Pune, Maharashtra - 413801
    </p>

    <div className="flex flex-wrap justify-center gap-5">
      <a
        href="tel:9975285074"
        className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/919975285074"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 px-6 py-3 rounded-full font-bold hover:bg-green-600"
      >
        💬 WhatsApp
      </a>

      <a
        href="https://maps.app.goo.gl/yHpnis7WoXbmDoVG6?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 px-6 py-3 rounded-full font-bold hover:bg-red-600"
      >
        📍 View Location
      </a>
    </div>
  </div>
</section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919975285074"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl font-bold hover:bg-green-600"
      >
        WhatsApp
      </a>
<a
  href="https://wa.me/919975285074"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition"
>
  💬
</a>
    </main>
  );