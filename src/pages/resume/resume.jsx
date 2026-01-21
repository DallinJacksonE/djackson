

export function Resume() {
  const pdfUrl = "/Resume_DallinJackson.pdf";

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <object
        data={pdfUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>It looks like your browser doesn't support embedded PDFs.</p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none'
            }}
          >
            View / Download Resume
          </a>
        </div>
      </object>
    </div>
  );
}
