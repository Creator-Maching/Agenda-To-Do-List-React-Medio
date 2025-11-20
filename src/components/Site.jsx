import wallpaper from '../assets/images/wallpaper.jpg';

export default function Site({ children }) {
  return (
    <div 
    style={{
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignText: 'center',
      margin: '0px',
      padding: '0px',
    }}>
      {children}
    </div>
  );
}