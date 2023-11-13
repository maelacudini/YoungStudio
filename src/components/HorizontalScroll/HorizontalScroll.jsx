import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./horizontal.module.scss";

export default function HorizontalScroll() {
  const outer = useRef(null);

  useEffect(() => {
    //horizontal scroll
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".section");
    let to = gsap.to(sections, {
      xPercent: () => -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: outer.current,
        pin: true,
        pinSpacing: true,
        scrub: 2,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (sections.length - 1),
        scrollbars: false,
        end: () => "+=300",
      },
    });

    //kill gsap
    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className={style.main}>
      <div ref={outer} className={style.slider}>
        <section className={`${style.section} section`}>
          <p className={style.title}>About us</p>
          <h2>
            Young Studio®, born in 2012, emerged as a vision of Jule Verter and
            Elida Borrows, two creative minds with a shared passion for
            strategic branding. From the heart of Vienna, this dynamic duo set
            out to redefine the landscape of brand identity, and since then,
            Young Studio® has been at the forefront of innovative and impactful
            branding solutions.
          </h2>
          <p className={style.footer}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </section>
        <section className={`${style.section} section`}>
          <p className={style.title}>Our expertise</p>
          <h2>
            From intricate brand strategy development to visually arresting
            design elements, our expertise encompasses the entire spectrum of
            strategic branding. We pride ourselves on staying ahead of industry
            trends and embracing cutting-edge techniques, ensuring that our
            clients receive not only visually stunning solutions but also
            strategies deeply rooted in market intelligence.
          </h2>
        </section>
        <section className={`${style.section} section`}>
          <p className={style.title}>Careers</p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quae
            sed maxime ut voluptate numquam quaerat, laudantium officia error
            vitae tempore repudiandae, rem tempora sapiente sint perspiciatis
            molestiae expedita laboriosam.
          </h2>
          <p className={style.footer}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </section>
      </div>
    </div>
  );
}
