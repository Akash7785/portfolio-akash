# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

    <div>
      <div className="flex bg-green-500">
        <img
          className="w-40 h-40 object-cover p-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 border-2 rounded-full"
          src={me}
          alt=""
        />
        <div className="tracking-wider">
          <h1 className="text-3xl font-bold">
            Hey, I'm Akash.
            <span className="text-[#a8adb2] ">
              <span>{""}</span> I'm a Frontend Software Developer.
            </span>
            <span className="mx-2 text-sm  bg-green-900  px-2 py-1 rounded-full ">
              <span className="w-2 h-2 inline-block rounded-full  bg-green-600"></span>
              <span className="px-2">Open to work</span>
            </span>
          </h1>
          <div className="flex items-center mt-10 justify-between">
            <div className="flex items-center ">
              <h1 className="text-center">🏠Lucknow, India.</h1>
            </div>
            <div className="flex gap-5 mx-10">
              <div className="flex items-center ">
                <img className="w-6 h-6 mx-1" src={linkedIn} alt="" />
                <h1>Linkedin</h1>
              </div>{" "}
              <div className="flex items-center ">
                <img className="w-6 h-6 mx-1" src={github} alt="" />
                <h1>github</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
