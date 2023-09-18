import PHT from './pht.jsx' ;
import TVA from './TVA.jsx' ;
import Buttons from './Buttons.jsx' ;
import Res from './Res.jsx';

function  CalculPTTC(){
    return (
        <div>
                <fieldset>
                    <legend>Calcul de PTTC</legend>
                        <PHT/> <br></br>
                        <TVA/> <br></br>
                        <Buttons/> <br></br>
                        <Res/> <br></br>
                </fieldset>
        </div>
    )
}
export default CalculPTTC ;