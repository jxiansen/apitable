

describe('This table can be managed, and related tables can be viewed', () => {
  beforeEach(() => {

    (async() => {
      await cy.login();
    })();

    // cy.login();
  });

  const newFieldName = '测试创建 可管理-可查看';

  it('This table creates associated columns', function() {
    cy.open('/space/spcfan7hTtnxg/workbench/dstCiLHpaWejq46PcY/viwCCmpN4f5MU');
    cy.get('.operateButton[data-operate-type=addField]').click();
    cy.get('.fieldOperateBox input').type(newFieldName);
    cy.get('#DATASHEET_GRID_CUR_COLUMN_TYPE').trigger('mouseover');
    cy.get('div[data-field-type=7]').click();
    cy.get('.fieldOperateBox .linkTitle').click();
    cy.wait(2000);
    cy.get('.searchPanelContainer .nodeContainer').should($el=>[
      $el.map((index,dom)=>{
        expect(dom).not.have.text('不可见 D');
      })
    ]);
  });
});
