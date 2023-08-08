import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { capitalizeWords, showDate } from '../utils/dataUtils';
import { SumsHooks } from '../models/sums.models';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = (sums: SumsHooks["sums"], total: SumsHooks["total"], saleCondition: string, client: string) => {
    
    const docDefinition: TDocumentDefinitions = {
        content: [
            { text: showDate(), style: "date" },
            { text: "Detalle:", style: "title"},
            { text: `Cliente: ${capitalizeWords(client)}`, style: "info"},
            { text: `Condición de la venta: ${saleCondition.toLowerCase()}`, style: "info"},
            { columns: [ { stack: sums.map(sum => ([`${sum.product} $${sum.amount}`])), style: "list" } ] },
            { text: `Total: $` + total(), style: "total" }
        ],
        styles: {
            title: {
                margin: 15,
                characterSpacing: 1,
                fontSize: 35,
            },
            date: {
                margin: [15, 0],
                fontSize: 14,
            },
            info: {
                margin: 15,
                characterSpacing: 1,
                fontSize: 14,
            },
            list: {
                margin: 15,
                alignment: "center",
                characterSpacing: 1,
                fontSize: 23,
            },
            total: {
                margin: 15,
                characterSpacing: 1,
                fontSize: 30,
            }
        }
    };

    pdfMake.createPdf(docDefinition).open();

};

export default generatePDF;