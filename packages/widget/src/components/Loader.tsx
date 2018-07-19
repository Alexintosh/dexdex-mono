import * as React from 'react';

const classes = require('./Loader.css');

const Loader: React.SFC = () => (
  <svg
    id={classes.dex}
    width="200px"
    height="45px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M30.2293319,43.806224 L23.5908678,43.806224 L23.5908678,39.6390663 L23.4744035,39.6390663 C22.503863,41.2596358 21.1548319,42.4943368 19.4272698,43.3432065 C17.6997076,44.1920762 15.846003,44.6165047 13.8661003,44.6165047 C11.7309112,44.6165047 9.81897499,44.2210145 8.13023447,43.4300223 C6.44149395,42.6390301 5.00511551,41.5779589 3.82105606,40.2467768 C2.63699661,38.9155948 1.72470219,37.3529263 1.08414544,35.5587244 C0.443588693,33.7645225 0.123315122,31.8449482 0.123315122,29.799944 C0.123315122,27.7549397 0.453293952,25.8450115 1.11326151,24.0701021 C1.77322907,22.2951927 2.70493401,20.7518164 3.90840427,19.4399269 C5.11187453,18.1280373 6.54825297,17.0959044 8.21758268,16.3434972 C9.88691239,15.59109 11.7115012,15.214892 13.6914039,15.214892 C14.9725174,15.214892 16.1177381,15.3595835 17.1271002,15.6489709 C18.1364624,15.9383583 19.019641,16.2952641 19.7766626,16.7196989 C20.5336842,17.1441338 21.1839366,17.6071467 21.7274393,18.1087515 C22.270942,18.6103563 22.717384,19.0926614 23.0667786,19.5556813 L23.241475,19.5556813 L23.241475,0.0510681091 L30.2293319,0.0510681091 L30.2293319,43.806224 Z M7.22763629,29.799944 C7.22763629,30.8803236 7.3926257,31.960687 7.72260948,33.0410666 C8.05259327,34.1214462 8.54756151,35.0860564 9.20752907,35.9349261 C9.86749663,36.7837958 10.702149,37.4783152 11.7115111,38.018505 C12.7208733,38.5586948 13.904915,38.8287857 15.2636717,38.8287857 C16.5447852,38.8287857 17.6900059,38.5683409 18.699368,38.0474436 C19.7087302,37.5265463 20.5724983,36.841673 21.2906983,35.9928033 C22.0088983,35.1439336 22.5523928,34.1889695 22.9211982,33.1278824 C23.2900036,32.0667953 23.4744035,30.996078 23.4744035,29.9156983 C23.4744035,28.8353187 23.2900036,27.7549553 22.9211982,26.6745757 C22.5523928,25.5941961 22.0088983,24.6295859 21.2906983,23.7807162 C20.5724983,22.9318465 19.7087302,22.2373271 18.699368,21.6971373 C17.6900059,21.1569475 16.5447852,20.8868566 15.2636717,20.8868566 C13.904915,20.8868566 12.7208733,21.1473014 11.7115111,21.6681987 C10.702149,22.189096 9.86749663,22.8739693 9.20752907,23.722839 C8.54756151,24.5717087 8.05259327,25.5266728 7.72260948,26.5877599 C7.3926257,27.648847 7.22763629,28.7195643 7.22763629,29.799944 Z M58.413688,27.1375932 C58.413688,26.2501385 58.2875196,25.4012815 58.0351791,24.5909968 C57.7828385,23.7807121 57.3849229,23.0669006 56.8414202,22.4495408 C56.2979175,21.832181 55.608844,21.3402298 54.7741792,20.9736724 C53.9395143,20.6071151 52.9592831,20.4238391 51.8334561,20.4238391 C49.7370885,20.4238391 47.961026,21.0508357 46.5052152,22.3048478 C45.0494044,23.5588599 44.2438678,25.1697589 44.0885814,27.1375932 L58.413688,27.1375932 Z M65.4015449,30.2629615 L65.4015449,31.1889965 C65.4015449,31.4976764 65.3821343,31.8063517 65.3433127,32.1150316 L44.0885814,32.1150316 C44.1662246,33.1182412 44.4282666,34.0346209 44.8747153,34.8641981 C45.3211639,35.6937753 45.9131848,36.4075869 46.6507956,37.0056542 C47.3884064,37.6037214 48.2230587,38.0763804 49.1547776,38.4236453 C50.0864965,38.7709102 51.0570225,38.94454 52.0663846,38.94454 C53.8133576,38.94454 55.2885571,38.6262187 56.4920273,37.9895664 C57.6954976,37.3529141 58.6854341,36.4751188 59.4618665,35.3561542 L64.1204378,39.0602944 C61.3641027,42.7644531 57.3655357,44.6165047 52.1246168,44.6165047 C49.950606,44.6165047 47.9513225,44.2788911 46.1267063,43.6036539 C44.3020901,42.9284166 42.7201328,41.9734525 41.3807868,40.7387329 C40.0414409,39.5040134 38.9932728,37.9895754 38.2362512,36.1953735 C37.4792296,34.4011716 37.1007245,32.3658441 37.1007245,30.0893299 C37.1007245,27.8514007 37.4792296,25.8160732 38.2362512,23.9832863 C38.9932728,22.1504995 40.0317356,20.587831 41.3516707,19.2952339 C42.6716059,18.0026369 44.2341527,16.9994423 46.0393581,16.28562 C47.8445635,15.5717978 49.7953207,15.214892 51.8916882,15.214892 C53.8327693,15.214892 55.6282423,15.5332133 57.2781612,16.1698656 C58.9280801,16.8065179 60.3547533,17.7518359 61.5582236,19.005848 C62.7616938,20.25986 63.703104,21.8225285 64.3824824,23.6939004 C65.0618608,25.5652722 65.4015449,27.7549374 65.4015449,30.2629615 Z M78.6784729,29.0475405 L68.6043126,16.0251726 L76.9897409,16.0251726 L83.0458835,24.648874 L89.2767226,16.0251726 L97.312758,16.0251726 L87.2968298,29.0475405 L98.7103294,43.806224 L90.2084368,43.806224 L82.9294192,33.6777157 L75.5921695,43.806224 L67.3232055,43.806224 L78.6784729,29.0475405 Z M131.262096,43.806224 L124.623632,43.806224 L124.623632,39.6390663 L124.507168,39.6390663 C123.536627,41.2596358 122.187596,42.4943368 120.460034,43.3432065 C118.732472,44.1920762 116.878767,44.6165047 114.898864,44.6165047 C112.763675,44.6165047 110.851739,44.2210145 109.162999,43.4300223 C107.474258,42.6390301 106.03788,41.5779589 104.85382,40.2467768 C103.669761,38.9155948 102.757466,37.3529263 102.11691,35.5587244 C101.476353,33.7645225 101.156079,31.8449482 101.156079,29.799944 C101.156079,27.7549397 101.486058,25.8450115 102.146026,24.0701021 C102.805993,22.2951927 103.737698,20.7518164 104.941168,19.4399269 C106.144639,18.1280373 107.581017,17.0959044 109.250347,16.3434972 C110.919677,15.59109 112.744265,15.214892 114.724168,15.214892 C116.005282,15.214892 117.150502,15.3595835 118.159864,15.6489709 C119.169227,15.9383583 120.052405,16.2952641 120.809427,16.7196989 C121.566448,17.1441338 122.216701,17.6071467 122.760203,18.1087515 C123.303706,18.6103563 123.750148,19.0926614 124.099543,19.5556813 L124.274239,19.5556813 L124.274239,0.0510681091 L131.262096,0.0510681091 L131.262096,43.806224 Z M108.2604,29.799944 C108.2604,30.8803236 108.42539,31.960687 108.755374,33.0410666 C109.085357,34.1214462 109.580326,35.0860564 110.240293,35.9349261 C110.900261,36.7837958 111.734913,37.4783152 112.744275,38.018505 C113.753637,38.5586948 114.937679,38.8287857 116.296436,38.8287857 C117.577549,38.8287857 118.72277,38.5683409 119.732132,38.0474436 C120.741494,37.5265463 121.605262,36.841673 122.323462,35.9928033 C123.041662,35.1439336 123.585157,34.1889695 123.953962,33.1278824 C124.322768,32.0667953 124.507168,30.996078 124.507168,29.9156983 C124.507168,28.8353187 124.322768,27.7549553 123.953962,26.6745757 C123.585157,25.5941961 123.041662,24.6295859 122.323462,23.7807162 C121.605262,22.9318465 120.741494,22.2373271 119.732132,21.6971373 C118.72277,21.1569475 117.577549,20.8868566 116.296436,20.8868566 C114.937679,20.8868566 113.753637,21.1473014 112.744275,21.6681987 C111.734913,22.189096 110.900261,22.8739693 110.240293,23.722839 C109.580326,24.5717087 109.085357,25.5266728 108.755374,26.5877599 C108.42539,27.648847 108.2604,28.7195643 108.2604,29.799944 Z M159.446452,27.1375932 C159.446452,26.2501385 159.320284,25.4012815 159.067943,24.5909968 C158.815603,23.7807121 158.417687,23.0669006 157.874184,22.4495408 C157.330682,21.832181 156.641608,21.3402298 155.806943,20.9736724 C154.972278,20.6071151 153.992047,20.4238391 152.86622,20.4238391 C150.769853,20.4238391 148.99379,21.0508357 147.537979,22.3048478 C146.082169,23.5588599 145.276632,25.1697589 145.121346,27.1375932 L159.446452,27.1375932 Z M166.434309,30.2629615 L166.434309,31.1889965 C166.434309,31.4976764 166.414898,31.8063517 166.376077,32.1150316 L145.121346,32.1150316 C145.198989,33.1182412 145.461031,34.0346209 145.907479,34.8641981 C146.353928,35.6937753 146.945949,36.4075869 147.68356,37.0056542 C148.421171,37.6037214 149.255823,38.0763804 150.187542,38.4236453 C151.119261,38.7709102 152.089787,38.94454 153.099149,38.94454 C154.846122,38.94454 156.321321,38.6262187 157.524791,37.9895664 C158.728262,37.3529141 159.718198,36.4751188 160.494631,35.3561542 L165.153202,39.0602944 C162.396867,42.7644531 158.3983,44.6165047 153.157381,44.6165047 C150.98337,44.6165047 148.984087,44.2788911 147.15947,43.6036539 C145.334854,42.9284166 143.752897,41.9734525 142.413551,40.7387329 C141.074205,39.5040134 140.026037,37.9895754 139.269015,36.1953735 C138.511994,34.4011716 138.133489,32.3658441 138.133489,30.0893299 C138.133489,27.8514007 138.511994,25.8160732 139.269015,23.9832863 C140.026037,22.1504995 141.0645,20.587831 142.384435,19.2952339 C143.70437,18.0026369 145.266917,16.9994423 147.072122,16.28562 C148.877328,15.5717978 150.828085,15.214892 152.924452,15.214892 C154.865533,15.214892 156.661006,15.5332133 158.310925,16.1698656 C159.960844,16.8065179 161.387517,17.7518359 162.590988,19.005848 C163.794458,20.25986 164.735868,21.8225285 165.415247,23.6939004 C166.094625,25.5652722 166.434309,27.7549374 166.434309,30.2629615 Z"
      id="dexdex"
      fill="#124"
    />
    <polygon
      id="Path-2-Copy"
      fill="#124"
      opacity="0.900000036"
      transform="translate(190.158898, 29.958379) scale(-1, 1) translate(-190.158898, -29.958379) "
      points="181.980067 16.122005 190.038263 16.122005 199.716696 29.0838536 188.977536 43.7947522 180.601099 43.7947522 191.981692 29.0838536"
    />
    <polygon
      id="Path-2"
      fill="#6AAFFF"
      points="169.732977 16.0770428 178.057874 16.0770428 187.365852 29.0925776 176.665402 43.723618 168.489273 43.723618 179.766111 29.0925776"
    />
    <rect id={classes.rectangleTop} fill="#fff" x="0" y="0" width="200px" height="23px" />
    <rect id={classes.rectangleBottom} fill="#fff" x="0" y="23" width="200px" height="23px" />
  </svg>
);

export default Loader;