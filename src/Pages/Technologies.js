import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    php,
    bootstrap,
    flutter,
    vscode,
    git,
    github,
    mysql,
    postman,
    figma,
    laravel,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="h-16" src={html} title="html" alt="" />
        <img className="h-16" src={css} title="CSS" alt="" />
        <img className="h-16" src={js} title="JavaScript" alt="" />
        <img className="h-16" src={react} title="React" alt="" />
        <img className="h-16" src={php} title="Php" alt="" />
        <img className="h-16" src={flutter} title="Flutter" alt="" />
        <img className="h-16" src={bootstrap} title="Bootstrap" alt="" />
        <img className="h-16" src={mysql} title="MySql" alt="" />
        <img className="h-16" src={laravel} title="Laravel" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img className="h-16" src={vscode} title="Visual Studio Code" alt="" />
        <img className="h-16" src={git} title="Git" alt="Git" />
        <img className="h-16" src={github} title="Github" alt="Github" />
        <img className="h-16" src={figma} title="Figma" alt="Figma" />
        <img className="h-16" src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
