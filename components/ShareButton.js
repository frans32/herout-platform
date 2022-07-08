export default function ShareButton() {
  if ("share" in navigator)
    return (
      <img
        src="/icons/share.svg"
        alt="Deel"
        onClick={async () => {
          try {
            await navigator.share({
              text: "Learn web development on MDN!",
              url: window.location.href,
            });
          } catch {}
        }}
      />
    );
  else return <></>;
}
