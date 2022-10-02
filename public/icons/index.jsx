import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  width: ${props => props.width || '24px'};
  height: ${props => props.height || '24px'};
`

export const Arrow = ({ title = 'arrow icon', ...props }) =>
  <SVG {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.39 7.45"
  >
    <title>{title}</title>
    <polygon points="13.39 0.76 12.63 0 6.7 5.94 0.76 0 0 0.76 6.7 7.45 6.7 7.45 6.7 7.45 13.39 0.76" />
  </SVG>;

export const DarkIcon = ({ title = 'Dark Icon', ...props }) =>
<SVG {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</SVG>

export const LightIcon = ({ title = 'Light Icon', ...props }) =>
<SVG {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="5"></circle>
  <line x1="12" y1="1" x2="12" y2="3"></line>
  <line x1="12" y1="21" x2="12" y2="23"></line>
  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
  <line x1="1" y1="12" x2="3" y2="12"></line>
  <line x1="21" y1="12" x2="23" y2="12"></line>
  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</SVG>

export const ReactIcon = ({ title = 'React Icon', ...props }) => 
<SVG {...props} viewBox="0 0 256 228" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF"></path>
    </g>
</SVG>

export const HtmlIcon = ({title = 'Html Icon', ...props}) => 
<SVG {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998">
  <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/>
  <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/>
  <path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/>
</SVG>

export const StyledComPonentIcon = ({title = 'Styled Components Icon', ...props}) => 
<SVG {...props} viewBox="0 0 318 318" xmlns="http://www.w3.org/2000/svg" >
  <defs>
    <path id="a" d="M0 0h318v318H0z"/>
    <mask id="b" fill="#fff" height="318" width="318" x="0" y="0"></mask>
  </defs>
    <g fill="none" fillRule="evenodd">
      <use mask="url(#b)" stroke="#4a4a4a" strokeWidth="8"/>
      <path d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 0 0 3.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9" fill="#4a4a4a"/>
      <text fill="#000" fontFamily="AppleColorEmoji, Apple Color Emoji" fontSize="100" letterSpacing=".5" transform="translate(38 44)">
        <tspan x="70" y="100">💅</tspan>
      </text>
    </g>
</SVG>

export const CssIcon = ({title = 'Css Icon', ...props}) => 
<SVG {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53">
  <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/>
  <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/>
  <path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/>
</SVG>

export const LexusIcon = ({title = 'Lexus Icon', ...props}) =>
<SVG {...props} xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <path fill="#2b2a29" d="M256 94c27 0 54 3 78 9-27 39-80 113-104 146l-8 10s-33 46 29 46h183c5-13 7-27 7-41 0-59-42-110-102-135 6-7 11-14 14-20 82 27 140 86 140 155 0 25-8 49-21 71H204s-86-1-42-76c36-62 85-125 102-146h-10c-103 0-187 68-187 152s84 152 187 152c65 0 123-27 156-69h52c-41 52-119 87-208 87-132 0-238-76-238-170S123 95 254 95z"/>
</SVG>

export const MaterialUiIcon = ({title = 'Material Ui Icon', ...props}) =>
<SVG {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
  <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25"/>
  <polygon fill="#0288d1" points="47,20 41,24 41,37 47,33"/>
  <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13"/>
  <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25"/>
  <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5"/>
  <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5"/>
  <polygon fill="#0288d1" points="35,26 18,37 18,30 35,19"/>
  <polygon fill="#0288d1" points="47,34 30,45 30,38 47,27"/>
  <polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765"/>
</SVG>

export const RubyIcon = ({title = 'Ruby Icon', ...props}) =>
<SVG {...props }version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 122.88 75.42" >

    <g>
        <path fill='#CC0000' d="M3.79,75.42h42.8c0,0-8.18-37.33,18.91-52.45c5.91-2.87,24.71-13.6,55.48,9.16c0.98-0.81,1.9-1.46,1.9-1.46 S94.71,2.55,63.34,5.69C47.52,7.1,28.12,21.46,16.74,40.42C5.54,59.08,3.84,74.92,3.79,75.41L3.79,75.42L3.79,75.42z M48.22,64.58 c0.11,2.87,0.38,5.2,0.65,6.83l6.5,2.33c-0.49-2.11-0.98-4.5-1.3-7.04L48.22,64.58L48.22,64.58z M8.94,49.3l-6.23-2.28 c-1.03,2.33-2.17,5.04-2.71,6.5l6.23,2.28C6.93,53.96,8.07,51.31,8.94,49.3L8.94,49.3z M25.3,25.09l-3.85-3.36 c-1.41,1.35-2.76,2.71-4.01,4.06l4.17,3.58C22.76,27.9,24,26.44,25.3,25.09L25.3,25.09z M49.03,50.82l4.39,3.47 c0.22-2.11,0.6-4.23,1.14-6.34l-3.9-3.09C49.95,46.87,49.47,48.87,49.03,50.82L49.03,50.82z M56.89,33.37l2.6,3.9 c0.92-1.35,2-2.6,3.2-3.85l-2.44-3.68C59,30.88,57.86,32.13,56.89,33.37L56.89,33.37z M45.78,8.99l-2.44-3.74 c-1.35,0.7-2.76,1.46-4.23,2.33l2.49,3.79C43.02,10.51,44.37,9.7,45.78,8.99L45.78,8.99z M70.38,23.24l1.25,3.74 c1.57-0.76,3.14-1.41,4.71-1.9l-1.19-3.58C73.31,22.05,71.73,22.65,70.38,23.24L70.38,23.24z M67.78,3.3c0.16,0,0.38,0,0.54,0 L67.24,0c-1.68,0-3.41,0.11-5.2,0.33l1.03,3.2C64.64,3.36,66.21,3.3,67.78,3.3L67.78,3.3z M87.83,20.21l-0.22,3.41 c1.79,0.05,3.58,0.27,5.36,0.65l0.22-3.36C91.35,20.53,89.56,20.32,87.83,20.21L87.83,20.21z M92.97,8.72l0.22-3.63 c-0.49-0.27-1.84-0.92-5.26-1.9l-0.22,3.58C89.5,7.37,91.24,8.02,92.97,8.72L92.97,8.72z"/>
    </g>
</SVG>

export const NextJsIcon = ({title = 'Next Js Icon', ...props}) =>
<SVG {...props} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.68 306.34">
  <title>nextjs</title>
  <path d="M119.55,79.9h95.57v7.61H128.31V144.8h81.63v7.61H128.31v62.9h87.8v7.62H119.55Zm104.13,0h10.15l45,62.9,46-62.9L387.37,0,284.6,149.41l53,73.52H327L278.83,156l-48.38,66.91H220.1l53.35-73.52L223.68,79.9Zm117.66,7.61V79.9h108.9v7.61H400.07V222.92h-8.76V87.51h-50ZM0,79.9H11l151,226.44-62.4-83.41L9.16,90.71l-.4,132.22H0ZM449.36,213a3.19,3.19,0,1,1,3.13-3.18,3.1,3.1,0,0,1-3.13,3.18Zm8.61-8.38h4.69a4.28,4.28,0,0,0,4.64,4.26c3.05,0,4.78-1.84,4.78-5.28V181.8h4.77v21.83c0,6.2-3.58,9.77-9.5,9.77-5.56,0-9.38-3.46-9.38-8.77Zm25.12-.27h4.73c.41,2.92,3.26,4.78,7.37,4.78,3.84,0,6.65-2,6.65-4.72,0-2.35-1.79-3.76-5.86-4.72l-4-1c-5.56-1.31-8.1-4-8.1-8.54,0-5.49,4.47-9.15,11.18-9.15,6.25,0,10.81,3.66,11.09,8.85h-4.65c-.45-2.84-2.92-4.62-6.5-4.62-3.77,0-6.28,1.82-6.28,4.6,0,2.2,1.62,3.47,5.62,4.41l3.39.83c6.31,1.47,8.91,4,8.91,8.68,0,5.9-4.57,9.6-11.85,9.6-6.82,0-11.4-3.53-11.74-9.05Z"/>
</SVG>

export const GithubIcon = ({title = 'Github Icon', ...props}) =>
<SVG {...props} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
</SVG>

export const LinkedInIcon = ({title = 'LinkedIn Icon', ...props}) =>
<SVG {...props}fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px">
  <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z"/>
</SVG>

export const GmailIcon = ({title = 'Gmail Icon', ...props}) =>
<SVG {...props} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
  <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"/>
</SVG>