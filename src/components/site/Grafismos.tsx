type GrafismoProps = React.SVGProps<SVGSVGElement>;

/** Grafismos da identidade visual do Instituto CRIAS.
 *  Todos usam currentColor — a cor vem da classe aplicada. */

export function GrafismoCoracao({ className, ...props }: GrafismoProps) {
  return (
    <svg viewBox="0 0 135 140" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M333.66,92.57c-16.41-9.61-37.33-6.46-50.75,7.01l-.06.06s-.04-.04-.06-.06c-16.53-16.53-43.34-16.53-59.87,0-16.53,16.53-16.53,43.34,0,59.87.4.4.84.75,1.26,1.14l48.3,48.3c5.76,5.76,15.11,5.76,20.87,0l49.44-49.44h0s0,0,0,0c19.16-19.16,16.12-52.11-9.12-66.89Z" transform="translate(-215 -80)" />
    </svg>
  );
}

export function GrafismoPlay({ className, ...props }: GrafismoProps) {
  return (
    <svg viewBox="0 0 135 146" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M531.55,145.26l-117.91-62.03c-3.64-1.92-8.02.73-8.02,4.84v124.05c0,4.12,4.38,6.76,8.02,4.84l117.91-62.03c3.9-2.05,3.9-7.64,0-9.69Z" transform="translate(-403 -76)" />
    </svg>
  );
}

export function GrafismoBalao({ className, ...props }: GrafismoProps) {
  return (
    <svg viewBox="0 0 131 124" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M135.29,194.54c11.25-11.43,18.2-27.11,18.2-44.43,0-34.99-28.38-63.39-63.39-63.39s-63.39,28.4-63.39,63.39c0,28.38,18.67,52.41,44.39,60.49,5.99,1.89,12.39,2.91,19,2.91h55.28c3.08,0,4.64-3.69,2.52-5.91l-12.6-13.05Z" transform="translate(-25 -85)" />
    </svg>
  );
}

export function GrafismoEstrela({ className, ...props }: GrafismoProps) {
  return (
    <svg viewBox="0 0 138 138" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M714.77,137.97l-18.22-6.79,8.09-17.68c4.99-10.91-6.25-22.15-17.16-17.16l-17.68,8.09-6.79-18.22c-4.19-11.24-20.08-11.24-24.27,0l-6.79,18.22-17.68-8.09c-10.91-4.99-22.15,6.25-17.16,17.16l8.09,17.68-18.22,6.79c-11.24,4.19-11.24,20.08,0,24.27l18.22,6.79-8.09,17.68c-4.99,10.91,6.25,22.15,17.16,17.16l17.68-8.09,6.79,18.22c4.19,11.24,20.08,11.24,24.27,0l6.79-18.22,17.68,8.09c10.91,4.99,22.15-6.25,17.16-17.16l-8.09-17.68,18.22-6.79c11.24-4.19,11.24-20.08,0-24.27Z" transform="translate(-585 -81)" />
    </svg>
  );
}

/** Conjunto dos quatro grafismos alinhados, para uso como assinatura visual. */
export function GrafismosConjunto({ className, ...props }: GrafismoProps) {
  return (
    <svg viewBox="0 0 750 300" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M333.66,92.57c-16.41-9.61-37.33-6.46-50.75,7.01l-.06.06s-.04-.04-.06-.06c-16.53-16.53-43.34-16.53-59.87,0-16.53,16.53-16.53,43.34,0,59.87.4.4.84.75,1.26,1.14l48.3,48.3c5.76,5.76,15.11,5.76,20.87,0l49.44-49.44h0s0,0,0,0c19.16-19.16,16.12-52.11-9.12-66.89Z" />
      <path d="M531.55,145.26l-117.91-62.03c-3.64-1.92-8.02.73-8.02,4.84v124.05c0,4.12,4.38,6.76,8.02,4.84l117.91-62.03c3.9-2.05,3.9-7.64,0-9.69Z" />
      <path d="M135.29,194.54c11.25-11.43,18.2-27.11,18.2-44.43,0-34.99-28.38-63.39-63.39-63.39s-63.39,28.4-63.39,63.39c0,28.38,18.67,52.41,44.39,60.49,5.99,1.89,12.39,2.91,19,2.91h55.28c3.08,0,4.64-3.69,2.52-5.91l-12.6-13.05Z" />
      <path d="M714.77,137.97l-18.22-6.79,8.09-17.68c4.99-10.91-6.25-22.15-17.16-17.16l-17.68,8.09-6.79-18.22c-4.19-11.24-20.08-11.24-24.27,0l-6.79,18.22-17.68-8.09c-10.91-4.99-22.15,6.25-17.16,17.16l8.09,17.68-18.22,6.79c-11.24,4.19-11.24,20.08,0,24.27l18.22,6.79-8.09,17.68c-4.99,10.91,6.25,22.15,17.16,17.16l17.68-8.09,6.79,18.22c4.19,11.24,20.08,11.24,24.27,0l6.79-18.22,17.68,8.09c10.91,4.99,22.15-6.25,17.16-17.16l-8.09-17.68,18.22-6.79c11.24-4.19,11.24-20.08,0-24.27Z" />
    </svg>
  );
}