"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type DemoClip = { src: string; poster: string; badge: string; playLabel: string };

/**
 * Click-to-load video. With a YouTube ID it embeds the company video (privacy-enhanced domain).
 * Without one it plays a temporary local demo clip (badged) or, failing that, links to the channel.
 * Nothing heavy loads until the visitor presses play.
 */
export function VideoEmbed({ youtubeId, title, playLabel, channelUrl, channelLabel, demo }: { youtubeId: string | null; title: string; playLabel: string; channelUrl: string; channelLabel: string; demo?: DemoClip }) {
  const [playing, setPlaying] = useState(false);

  if (playing && youtubeId) {
    return (
      <div className="mp-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  const useDemo = !youtubeId && demo;
  return (
    <div className="mp-video">
      {playing && useDemo ? (
        <video src={demo.src} poster={demo.poster} controls autoPlay playsInline preload="metadata" aria-label={title} />
      ) : (
        <>
          {useDemo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="mp-video__poster" src={demo.poster} alt="" loading="lazy" decoding="async" width={1280} height={720} />
          ) : (
            <div className="mp-video__poster mp-video__poster--placeholder" />
          )}
          <div className="mp-video__scrim" />
          {youtubeId || useDemo ? (
            <button className="mp-video__play" type="button" onClick={() => setPlaying(true)}>
              <span className="mp-video__btn"><Icon name="play" /></span>
              <span>{useDemo ? demo.playLabel : playLabel}</span>
            </button>
          ) : (
            <a className="mp-video__play" href={channelUrl} target="_blank" rel="noopener">
              <span className="mp-video__btn"><Icon name="play" /></span>
              <span>{channelLabel}</span>
            </a>
          )}
        </>
      )}
      {useDemo && <span className="mp-demo-badge mp-media-badge">{demo.badge}</span>}
    </div>
  );
}
