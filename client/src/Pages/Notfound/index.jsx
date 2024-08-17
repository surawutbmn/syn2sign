function Notfound() {
  return (
    <div>
      <img
        src={import.meta.env.VITE_BASE_URL+"icon/ele-head-l.svg"}
        className="ele-head-l"
        alt=""
      />
      <img
        src={import.meta.env.VITE_BASE_URL+"icon/ele-head-r.svg"}
        className="ele-head-r"
        alt=""
      />
      <div className="bg-gd-btf"></div>
      <div className="d-flex flex-column position-relative">
        <h1 className="txt-prim" style={{ fontSize: "5rem" }}>
          <strong>404 PAGE NOT FOUND</strong>
        </h1>
        <p>
          ติดตามพวกเราได้ที่
          <a
            className="txt-cl-light"
            href="https://www.facebook.com/funcslash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u> https://www.facebook.com/funcslash </u>
          </a>
          หรือ
          <a
            className="txt-cl-light"
            href="https://ict.su.ac.th/func/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u> https://ict.su.ac.th/func/</u>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Notfound