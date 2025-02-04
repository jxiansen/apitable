

describe('This table can be managed, and related tables can be managed', () => {
  beforeEach(() => {

    (async() => {
      await cy.login();
    })();

    // cy.login();
  });

  const newFieldName = '测试创建 可管理-可编辑';

  it('This table creates associated columns', function() {
    cy.open('/space/spcfan7hTtnxg/workbench/dstCiLHpaWejq46PcY/viwCCmpN4f5MU');
    cy.get('.operateButton[data-operate-type=addField]').click();
    cy.get('.fieldOperateBox input').type(newFieldName);
    cy.get('#DATASHEET_GRID_CUR_COLUMN_TYPE').trigger('mouseover');
    cy.get('div[data-field-type=7]').click();
    cy.get('.fieldOperateBox .linkTitle').click();
    cy.wait(2000);
    cy.get('.searchPanelContainer .nodeContainer').contains('可编辑 B').click();
    cy.get('.fieldOperateBox button.btn-primary').click();
    expect(cy.get(`.fieldHeaderClass[data-field-name='${newFieldName}']`)).to.exist;

  });

  it('Related tables have related columns', function() {
    cy.visit('/space/spcfan7hTtnxg/workbench/dstwSUth6wVblDR3HC/viwsCy2XqN0pK');
    cy.wait(2000);
    expect(cy.get('.fieldHeaderClass[data-field-name=\'可管理 A\']')).to.exist;
  });

  it('This table deletes the newly created associated columns', function() {
    cy.open('/space/spcfan7hTtnxg/workbench/dstCiLHpaWejq46PcY/viwCCmpN4f5MU');
    cy.get(`.fieldHeaderClass[data-field-name='${newFieldName}']`).rightclick();
    cy.get('#DATASHEET_FIELD_CONTEXT div[role=presentation]').last().click();
    cy.get('.ant-modal-body button[role=switch]').click();
    cy.get('.ant-modal-body  span[data-delete-field=true]').click();
    cy.get('.ant-modal-body button.btn-primary').click();
    cy.get('.fieldHeaderClass[data-field-name]').each(el=>{
      el.map((index,dom)=>{
        expect(dom.innerText).to.not.match(new RegExp(newFieldName));
      });
    });
  });

  it('The associated columns in the association table are deleted', function() {
    cy.open('/space/spcfan7hTtnxg/workbench/dstwSUth6wVblDR3HC/viwsCy2XqN0pK');
    cy.get('.fieldHeaderClass[data-field-name]').each(el=>{
      el.map((index,dom)=>{
        expect(dom.innerText).to.not.match(new RegExp('可管理 A'));
      });
    });
  });
});
