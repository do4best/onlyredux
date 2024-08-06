import PropTypes from "prop-types";

function TitleShow({title,classes}) {
    return (
        <>
            <div className={!classes?"mt-16 text-8xl text-center font-bold":classes}>{!title?"Hello There":title}</div>
        </>
    );
}

export default TitleShow;

TitleShow.propTypes={
    title:PropTypes.string
}