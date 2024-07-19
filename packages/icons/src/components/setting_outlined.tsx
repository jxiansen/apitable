/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const SettingOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => (
    <>
      <path
        d="M7.99994 4.99999C6.34309 4.99999 4.99994 6.34314 4.99994 7.99999C4.99994 9.65685 6.34309 11 7.99994 11C9.6568 11 10.9999 9.65685 10.9999 7.99999C10.9999 6.34314 9.6568 4.99999 7.99994 4.99999ZM6.49994 7.99999C6.49994 7.17156 7.17152 6.49999 7.99994 6.49999C8.82837 6.49999 9.49994 7.17156 9.49994 7.99999C9.49994 8.82842 8.82837 9.49999 7.99994 9.49999C7.17152 9.49999 6.49994 8.82842 6.49994 7.99999Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M11.5001 1.93785C11.0912 1.70178 10.6677 1.51137 10.2357 1.36535C9.92997 1.26199 9.59238 1.36585 9.39758 1.62319L8.8736 2.31539C8.28976 2.2258 7.70084 2.22809 7.12745 2.31644L6.60266 1.62319C6.40786 1.36585 6.07027 1.26199 5.76451 1.36535C5.33251 1.51137 4.90901 1.70178 4.50012 1.93785C4.09123 2.17392 3.71459 2.44547 3.37213 2.74658C3.12974 2.9597 3.05089 3.304 3.17635 3.60137L3.51411 4.40193C3.33396 4.62703 3.16869 4.8683 3.02047 5.12501C2.87225 5.38175 2.74593 5.64553 2.64106 5.91411L1.77895 6.02187C1.45869 6.06191 1.19995 6.30234 1.13658 6.61882C1.04703 7.06595 1.00018 7.52791 1.00018 8.00006C1.00018 8.4722 1.04703 8.93416 1.13658 9.3813C1.19995 9.69777 1.45869 9.93821 1.77895 9.97824L2.64168 10.0861C2.85185 10.6268 3.14433 11.138 3.51382 11.5988L3.17634 12.3987C3.05088 12.6961 3.12974 13.0403 3.37212 13.2535C3.71458 13.5546 4.09122 13.8261 4.50011 14.0622C4.909 14.2983 5.3325 14.4887 5.7645 14.6347C6.07026 14.7381 6.40786 14.6342 6.60266 14.3769L7.12665 13.6846C7.71048 13.7742 8.2994 13.7719 8.87279 13.6836L9.39758 14.3769C9.59238 14.6342 9.92998 14.7381 10.2357 14.6347C10.6677 14.4887 11.0912 14.2983 11.5001 14.0622C11.909 13.8261 12.2857 13.5546 12.6281 13.2535C12.8705 13.0403 12.9494 12.6961 12.8239 12.3987L12.4861 11.5981C12.6663 11.373 12.8315 11.1317 12.9798 10.875C13.128 10.6183 13.2543 10.3546 13.3591 10.086L14.2214 9.97824C14.5417 9.93821 14.8004 9.69777 14.8638 9.3813C14.9533 8.93416 15.0002 8.4722 15.0002 8.00006C15.0002 7.52791 14.9533 7.06595 14.8638 6.61882C14.8004 6.30234 14.5417 6.06191 14.2214 6.02187L13.3586 5.91402C13.1484 5.37326 12.8559 4.86208 12.4864 4.40125L12.8239 3.60137C12.9494 3.304 12.8705 2.95971 12.6281 2.74659C12.2856 2.44547 11.909 2.17392 11.5001 1.93785ZM9.78654 3.59463L10.2509 2.98115C10.4196 3.05707 10.5862 3.14224 10.7501 3.23688C10.914 3.33153 11.0711 3.43322 11.2212 3.54133L10.9221 4.25025C10.8057 4.526 10.8645 4.84452 11.0715 5.06064C11.5495 5.55953 11.8913 6.16218 12.0801 6.80995C12.1638 7.09717 12.4102 7.30715 12.7071 7.34426L13.4721 7.43988C13.4906 7.6239 13.5002 7.81077 13.5002 8.00006C13.5002 8.18935 13.4906 8.37621 13.4721 8.56024L12.7083 8.6557C12.4117 8.69278 12.1654 8.90248 12.0815 9.1894C11.9881 9.50866 11.8553 9.82264 11.6807 10.125C11.5061 10.4274 11.3006 10.6994 11.0708 10.9399C10.8643 11.1561 10.8058 11.4742 10.922 11.7496L11.2212 12.4587C11.0711 12.5668 10.914 12.6685 10.7501 12.7632C10.5862 12.8578 10.4196 12.943 10.2509 13.0189L9.78568 12.4043C9.60511 12.1657 9.30005 12.0573 9.00945 12.1284C8.35406 12.2888 7.66128 12.2941 6.99025 12.1296C6.69957 12.0584 6.39435 12.1668 6.21372 12.4054L5.74931 13.0189C5.58064 12.943 5.41404 12.8578 5.25011 12.7632C5.08618 12.6685 4.92912 12.5668 4.77905 12.4587L5.07815 11.7498C5.19449 11.474 5.13575 11.1555 4.9287 10.9394C4.45076 10.4405 4.10898 9.83789 3.92015 9.19014C3.83642 8.90293 3.59 8.69295 3.29315 8.65584L2.5283 8.56024C2.50972 8.37621 2.50018 8.18935 2.50018 8.00006C2.50018 7.81077 2.50972 7.6239 2.5283 7.43988L3.29187 7.34443C3.58851 7.30735 3.8348 7.09765 3.9187 6.81072C4.01207 6.49143 4.14492 6.17741 4.31951 5.87501C4.49409 5.57263 4.6996 5.30058 4.92942 5.06009C5.13595 4.84396 5.19441 4.52582 5.07821 4.25039L4.77905 3.54133C4.92913 3.43322 5.08619 3.33153 5.25012 3.23689C5.41405 3.14224 5.58065 3.05706 5.74931 2.98115L6.21456 3.59575C6.39512 3.83429 6.70018 3.9427 6.99078 3.8716C7.64618 3.71125 8.33897 3.70592 9.00999 3.8704C9.30068 3.94165 9.6059 3.83326 9.78654 3.59463Z"
        fill={colors[0]}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </>
  ),
  name: 'setting_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: [
    'M7.99994 4.99999C6.34309 4.99999 4.99994 6.34314 4.99994 7.99999C4.99994 9.65685 6.34309 11 7.99994 11C9.6568 11 10.9999 9.65685 10.9999 7.99999C10.9999 6.34314 9.6568 4.99999 7.99994 4.99999ZM6.49994 7.99999C6.49994 7.17156 7.17152 6.49999 7.99994 6.49999C8.82837 6.49999 9.49994 7.17156 9.49994 7.99999C9.49994 8.82842 8.82837 9.49999 7.99994 9.49999C7.17152 9.49999 6.49994 8.82842 6.49994 7.99999Z',
    'M11.5001 1.93785C11.0912 1.70178 10.6677 1.51137 10.2357 1.36535C9.92997 1.26199 9.59238 1.36585 9.39758 1.62319L8.8736 2.31539C8.28976 2.2258 7.70084 2.22809 7.12745 2.31644L6.60266 1.62319C6.40786 1.36585 6.07027 1.26199 5.76451 1.36535C5.33251 1.51137 4.90901 1.70178 4.50012 1.93785C4.09123 2.17392 3.71459 2.44547 3.37213 2.74658C3.12974 2.9597 3.05089 3.304 3.17635 3.60137L3.51411 4.40193C3.33396 4.62703 3.16869 4.8683 3.02047 5.12501C2.87225 5.38175 2.74593 5.64553 2.64106 5.91411L1.77895 6.02187C1.45869 6.06191 1.19995 6.30234 1.13658 6.61882C1.04703 7.06595 1.00018 7.52791 1.00018 8.00006C1.00018 8.4722 1.04703 8.93416 1.13658 9.3813C1.19995 9.69777 1.45869 9.93821 1.77895 9.97824L2.64168 10.0861C2.85185 10.6268 3.14433 11.138 3.51382 11.5988L3.17634 12.3987C3.05088 12.6961 3.12974 13.0403 3.37212 13.2535C3.71458 13.5546 4.09122 13.8261 4.50011 14.0622C4.909 14.2983 5.3325 14.4887 5.7645 14.6347C6.07026 14.7381 6.40786 14.6342 6.60266 14.3769L7.12665 13.6846C7.71048 13.7742 8.2994 13.7719 8.87279 13.6836L9.39758 14.3769C9.59238 14.6342 9.92998 14.7381 10.2357 14.6347C10.6677 14.4887 11.0912 14.2983 11.5001 14.0622C11.909 13.8261 12.2857 13.5546 12.6281 13.2535C12.8705 13.0403 12.9494 12.6961 12.8239 12.3987L12.4861 11.5981C12.6663 11.373 12.8315 11.1317 12.9798 10.875C13.128 10.6183 13.2543 10.3546 13.3591 10.086L14.2214 9.97824C14.5417 9.93821 14.8004 9.69777 14.8638 9.3813C14.9533 8.93416 15.0002 8.4722 15.0002 8.00006C15.0002 7.52791 14.9533 7.06595 14.8638 6.61882C14.8004 6.30234 14.5417 6.06191 14.2214 6.02187L13.3586 5.91402C13.1484 5.37326 12.8559 4.86208 12.4864 4.40125L12.8239 3.60137C12.9494 3.304 12.8705 2.95971 12.6281 2.74659C12.2856 2.44547 11.909 2.17392 11.5001 1.93785ZM9.78654 3.59463L10.2509 2.98115C10.4196 3.05707 10.5862 3.14224 10.7501 3.23688C10.914 3.33153 11.0711 3.43322 11.2212 3.54133L10.9221 4.25025C10.8057 4.526 10.8645 4.84452 11.0715 5.06064C11.5495 5.55953 11.8913 6.16218 12.0801 6.80995C12.1638 7.09717 12.4102 7.30715 12.7071 7.34426L13.4721 7.43988C13.4906 7.6239 13.5002 7.81077 13.5002 8.00006C13.5002 8.18935 13.4906 8.37621 13.4721 8.56024L12.7083 8.6557C12.4117 8.69278 12.1654 8.90248 12.0815 9.1894C11.9881 9.50866 11.8553 9.82264 11.6807 10.125C11.5061 10.4274 11.3006 10.6994 11.0708 10.9399C10.8643 11.1561 10.8058 11.4742 10.922 11.7496L11.2212 12.4587C11.0711 12.5668 10.914 12.6685 10.7501 12.7632C10.5862 12.8578 10.4196 12.943 10.2509 13.0189L9.78568 12.4043C9.60511 12.1657 9.30005 12.0573 9.00945 12.1284C8.35406 12.2888 7.66128 12.2941 6.99025 12.1296C6.69957 12.0584 6.39435 12.1668 6.21372 12.4054L5.74931 13.0189C5.58064 12.943 5.41404 12.8578 5.25011 12.7632C5.08618 12.6685 4.92912 12.5668 4.77905 12.4587L5.07815 11.7498C5.19449 11.474 5.13575 11.1555 4.9287 10.9394C4.45076 10.4405 4.10898 9.83789 3.92015 9.19014C3.83642 8.90293 3.59 8.69295 3.29315 8.65584L2.5283 8.56024C2.50972 8.37621 2.50018 8.18935 2.50018 8.00006C2.50018 7.81077 2.50972 7.6239 2.5283 7.43988L3.29187 7.34443C3.58851 7.30735 3.8348 7.09765 3.9187 6.81072C4.01207 6.49143 4.14492 6.17741 4.31951 5.87501C4.49409 5.57263 4.6996 5.30058 4.92942 5.06009C5.13595 4.84396 5.19441 4.52582 5.07821 4.25039L4.77905 3.54133C4.92913 3.43322 5.08619 3.33153 5.25012 3.23689C5.41405 3.14224 5.58065 3.05706 5.74931 2.98115L6.21456 3.59575C6.39512 3.83429 6.70018 3.9427 6.99078 3.8716C7.64618 3.71125 8.33897 3.70592 9.00999 3.8704C9.30068 3.94165 9.6059 3.83326 9.78654 3.59463Z',
  ],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});
