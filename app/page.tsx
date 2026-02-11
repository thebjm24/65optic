export default function Home() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
          65 OPTIC
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#C9A227', marginBottom: '0.5rem' }}>
          See the World Clearly
        </p>
        <p style={{ fontSize: '1rem', color: '#999', marginBottom: '2rem' }}>
          Premium Eyewear & Vision Care
        </p>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#C9A227', color: '#000', fontWeight: 600, border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
          Book Appointment
        </button>
      </div>
    </div>
  )
}
