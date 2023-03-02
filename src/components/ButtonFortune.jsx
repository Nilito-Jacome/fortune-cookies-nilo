
const Buttonfortune = ({}) => {

    return (
        <Button>
            onClick={() =>Math.floor(Math.random() * Background.length)}
            <i class="bx bx-shuffle"></i>
        </Button>
        
    );
};

export default Buttonfortune;
