import { SlideTemplate } from "./common";

export const DeathByAThousandCuts: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>death by a thousand cuts</h1>
      <figure>
        <blockquote>
          The danger of defaulting to doing unnecessary work, even if that work
          is trivial, is that your app will eventually succumb to 'death by a
          thousand cuts' with no clear bottleneck to aim at once it's time to
          optimise.
        </blockquote>
        <figcaption>
          Rich Harris -{" "}
          <a
            href="https://svelte.dev/blog/virtual-dom-is-pure-overhead"
            target="_blank"
          >
            https://svelte.dev/blog/virtual-dom-is-pure-overhead
          </a>
        </figcaption>
      </figure>
    </SlideTemplate>
  );
};
