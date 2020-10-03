function SectionHeader(props) {
  return (
          <div className="section-headline">
            <div className="section-header">{props.sectionHeader}</div>
                <div className="section-links">
                    {props.children}
                </div>
          </div>
    );
}

export default SectionHeader;