import { DateUtilities } from "../../../utils/index.js";
import { FormHelperText } from "@mui/material";

const getHoldHarmlessPreamble = (personName) => {

    const currentDateAsOrdinal = DateUtilities.getCurrentDateAsOrdinal();
    const currentMonth = DateUtilities.getCurrentMonth();
    const currentYear = DateUtilities.getCurrentFullYear();
    
    return (
        <>
            <FormHelperText>
                Agreement made this {currentDateAsOrdinal} day of {currentMonth}, {currentYear} by and between A Refuge for Saving the Wildlife, Incorporated&copy; (hereinafter referred to as RSW&copy;), located in Northbrook, IL, and {personName} (hereinafter referred to as Volunteer).
            </FormHelperText>
            <FormHelperText>
                Whereas RSW&copy; desires to accept the gratuitous services of the Volunteer, and the Volunteer desires to provide gratuitous services to RSW&copy;.
            </FormHelperText>
            <FormHelperText>
                In consideration of the following premises and mutual covenants, and other good and valuable considerations, the receipt and sufficiency of which are hereby acknowledged, it is mutually covenanted and agreed by and between the parties hereto as follows:
            </FormHelperText>
        </>
    );

}

export const formHelperTextUtilities = {
    getHoldHarmlessPreamble,
}