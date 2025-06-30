import React from "react";
import SectionHeader from "./sectionHeader";

const Section = ({ title, items, isSingleLine = false }) => {
    if (!isSingleLine) {
        return (
            <>
                <SectionHeader title={title} />
                {items.map((item) => (
                    <div className="record-container">
                        <div className="title">
                            <div>{item.title}</div>
                            <div className="time-line">{item.organization}</div>
                        </div>
                        <div className="description-container">
                            <div style={{ display: "flex" }}>
                                <div
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                        __html: item.summary,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }

    return (
        <>
            <SectionHeader title={title} />
            {items.map((item) => (
                <div className="single-line-item">
                    <div className="role">
                        <div className="title">{item.title}</div>
                        <div className="organization">{item.organization}</div>
                    </div>
                    <div className="summary">{item.summary}</div>
                </div>
            ))}
        </>
    );
};

export default Section;
