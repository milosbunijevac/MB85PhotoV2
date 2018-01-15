

export default {
  getRoute: (val) => ({
    type: 'routeValue',
    payload: {
      direction: 'row',
      justify: 'flex-end',
      alignItems: 'flex-start',
      value: val,
    },
  }),
}
;
