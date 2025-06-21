import 'bootstrap/dist/css/bootstrap.css'
import '../public/styles/home.scss';

export const metadata = {
  title: "Learn graphics design for life",
  description:
    "Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and Innovation. Your Gateway to the Digital Universe - Where Innovation Meets Insight",
  openGraph: {
    title: "Learn graphics design for life",
    description:
      "Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and Innovation. Your Gateway to the Digital Universe - Where Innovation Meets Insight",
    images: [""],
    url: "",
    type: "website",
  },
  twitter: {
    card: "",
    domain: "",
    url: "",
    title: "Learn graphics design for life",
    images: [""],
    description:
      "Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and Innovation. Your Gateway to the Digital Universe - Where Innovation Meets Insight",
  },
  facebook: {
    url: "",
    title: "Learn graphics design for life",
    description:
      "Stay Informed, Stay Ahead: Unveiling the Future of Technology, Gadgets, and Innovation. Your Gateway to the Digital Universe - Where Innovation Meets Insight",
    images: [""],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
