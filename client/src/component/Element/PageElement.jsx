function PageElement() {
  return (
    <>
      <img
        src={import.meta.env.VITE_BASE_URL + "icon/ele-head-l.svg"}
        className="ele-head-l"
        alt=""
      />
      <img
        src={import.meta.env.VITE_BASE_URL + "icon/ele-head-r.svg"}
        className="ele-head-r"
        alt=""
      />
      <div className="bg-gd-btr"></div>
    </>
  );
}

export default PageElement