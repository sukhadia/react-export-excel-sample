import React from 'react';
import ReactExport from "react-export-excel";
import './App.css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const DISCLAIMER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis dapibus, mattis justo et, vestibulum metus. Ut vestibulum, ligula ac ornare dictum, ipsum neque lacinia ex, vel pretium arcu augue sit amet dui. Ut malesuada tempus elit efficitur tristique. Phasellus vestibulum, erat at mattis dapibus, nisi est euismod nunc, vel fermentum elit enim et ante. Curabitur imperdiet urna metus, nec consectetur urna facilisis non. In rutrum nisl massa, non suscipit urna vehicula faucibus. Sed pretium, magna commodo ultrices pulvinar, magna lacus rutrum ipsum, vel pulvinar lorem magna at eros. Praesent eu bibendum ipsum. Fusce cursus neque arcu, vitae dictum odio sagittis vel. Aenean nec dignissim est. Aenean lobortis lacus turpis. Integer lacinia est ipsum, et gravida felis blandit et.\n\nUt non mattis lorem. Nulla bibendum maximus mauris, ac luctus ante tincidunt et. Fusce laoreet viverra sem, in feugiat nibh suscipit at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pharetra non nulla quis laoreet. Proin nec metus eget nisl elementum viverra at id dui. Ut in efficitur lorem. Nam laoreet augue erat, in pellentesque quam cursus et. Praesent aliquam ligula at augue ultricies luctus. Maecenas ipsum ligula, iaculis eget turpis in, facilisis rhoncus quam. Nullam ac est pharetra, consequat purus vitae, fringilla augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus pellentesque, leo at convallis tempus, nibh nisl aliquam arcu, eu aliquam nibh ex ac velit. Fusce eget turpis quis nisl vehicula finibus.\n\nSuspendisse posuere odio a neque maximus, aliquet laoreet tellus sagittis. Aliquam vel consequat eros. Vivamus a convallis nisi, eu ultricies turpis. Aliquam viverra purus sit amet mauris dignissim, eleifend facilisis est accumsan. Nulla ut nulla at magna semper varius sed eget ex. Mauris nibh dui, faucibus eget diam quis, convallis auctor nibh. Nulla semper ex at facilisis euismod.\n\nAliquam imperdiet efficitur orci sed laoreet. Aliquam felis leo, ullamcorper ac nisl a, vulputate aliquam tellus. Praesent suscipit neque id sem porta, in finibus turpis vehicula. Fusce laoreet mollis ante. Morbi pharetra nibh erat, vitae lobortis lectus viverra id. Sed et dolor at quam hendrerit mollis. Nulla elementum rutrum placerat. Proin dapibus scelerisque nisi vitae vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies arcu et purus porta, sit amet feugiat felis elementum. Cras consequat ultrices metus.\n\nMaecenas ultrices egestas odio, non interdum elit placerat pretium. Phasellus vestibulum pharetra eros et suscipit. Morbi a purus mauris. Morbi efficitur convallis nibh ut accumsan. Praesent tincidunt eleifend mauris, ut posuere nulla luctus tincidunt. In ac sapien id nunc maximus laoreet quis quis elit. Nullam sit amet tortor diam. Mauris eu viverra ipsum. Maecenas non tincidunt nisi. Curabitur id ipsum vel quam scelerisque tempor. Integer nunc ex, convallis at odio et, placerat consectetur orci. Duis venenatis nunc lectus, at ullamcorper lacus pharetra sed. Fusce vitae elit porta, aliquet mauris ut, bibendum quam. Maecenas bibendum sapien sed metus cursus vestibulum. Integer egestas tortor gravida nunc dapibus, a ultrices felis tempus. Nam convallis neque nec magna faucibus egestas.';


const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: 'M',
    is_married: true
  },
  {
    name: "Monika",
    amount: 355000,
    sex: 'F',
    is_married: false
  },
  {
    name: "John",
    amount: 250000,
    sex: 'M',
    is_married: false
  },
  {
    name: "Josef",
    amount: 450500,
    sex: 'M',
    is_married: true
  }
];

const dataSet2 = [
  {
    name: "Johnson",
    total: 25,
    remainig: 16
  },
  {
    name: "Josef",
    total: 25,
    remainig: 7
  }
];

const multiDataSet = [
  {
    columns: ["Headings", "Text Style", "Colors"],
    data: [
      [
        { value: "H1", style: { font: { sz: "24", bold: true } } },
        { value: "Bold", style: { font: { bold: true } } },
        { value: "Red", style: { fill: { patternType: "solid", fgColor: { rgb: "FFFF0000" } } } },
      ],
      [
        { value: "H2", style: { font: { sz: "18", bold: true } } },
        { value: "underline", style: { font: { underline: true } } },
        { value: "Blue", style: { fill: { patternType: "solid", fgColor: { rgb: "FF0000FF" } } } },
      ],
      [
        { value: "H3", style: { font: { sz: "14", bold: true } } },
        { value: "italic", style: { font: { italic: true } } },
        { value: "Green", style: { fill: { patternType: "solid", fgColor: { rgb: "FF00FF00" } } } },
      ],
      [
        { value: "H4", style: { font: { sz: "12", bold: true } } },
        { value: "strike", style: { font: { strike: true } } },
        { value: "Orange", style: { fill: { patternType: "solid", fgColor: { rgb: "FFF86B00" } } } },
      ],
      [
        { value: "H5", style: { font: { sz: "10.5", bold: true } } },
        { value: "outline", style: { font: { outline: true } } },
        { value: "Yellow", style: { fill: { patternType: "solid", fgColor: { rgb: "FFFFFF00" } } } },
      ],
      [
        { value: "H6", style: { font: { sz: "7.5", bold: true } } },
        { value: "shadow", style: { font: { shadow: true } } },
        { value: "Light Blue", style: { fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } } } }
      ],
      [
        { value: DISCLAIMER, style: { alignment: { vertical: 'top', wrapText: true } } },
        { value: "shadow", style: { font: { shadow: true } } },
        { value: "Light Blue", style: { fill: { patternType: "solid", fgColor: { rgb: "FFCCEEFF" } } } }
      ]
    ]
  }
];


function App() {
  return (<>
    <ExcelFile>
      <ExcelSheet data={dataSet1} name="Employees">
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Wallet Money" value="amount" />
        <ExcelColumn label="Gender" value="sex" />
        <ExcelColumn label="Marital Status"
          value={(col) => col.is_married ? "Married" : "Single"} />
      </ExcelSheet>
      <ExcelSheet data={dataSet2} name="Leaves">
        <ExcelColumn label="Name" value="name" />
        <ExcelColumn label="Total Leaves" value="total" />
        <ExcelColumn label="Remaining Leaves" value="remaining" />
      </ExcelSheet>
    </ExcelFile>
    <div>
      <ExcelFile element={<button>Download Data With Styles</button>}>
        <ExcelSheet dataSet={multiDataSet} name="Organization" />
      </ExcelFile>
    </div>
  </>
  );
}

export default App;
