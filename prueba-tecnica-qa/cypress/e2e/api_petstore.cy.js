describe('Pruebas de API - Opción 2: PetStore', () => {
  
  const baseUrl = 'https://petstore.swagger.io/v2';
  let petId; 
  const newPet = {
    id: Date.now(), 
    name: "DoggoQA",
    status: "available",
    tags: [{ id: 1, name: "test-cypress" }]
  };

  it('1. Debe crear una mascota y capturar el ID (POST)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/pet`,
      body: newPet,
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(newPet.name);
      
      petId = response.body.id; 
      cy.log(`*** ID GENERADO: ${petId} ***`);
      cy.log(`*** RESPUESTA COMPLETA: ${JSON.stringify(response.body)} ***`);
    });
  });

  it('2. Debe consultar la mascota por ID (GET)', () => {
    expect(petId).to.not.be.undefined; 
    
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/${petId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      cy.log(`*** MASCOTA CONSULTADA: ${response.body.name} ***`);
    });
  });

  it('3. Debe actualizar el status a "sold" (PUT)', () => {
    const updatedPet = {
      id: petId,
      name: "DoggoQA_Sold",
      status: "sold"
    };

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/pet`,
      body: updatedPet,
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("sold");
      cy.log(`*** ESTADO ACTUALIZADO A: ${response.body.status} ***`);
    });
  });

  it('4. Debe verificar la actualización por status (GET)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/findByStatus?status=sold`
    }).then((response) => {
      expect(response.status).to.eq(200);
      const myPet = response.body.find(pet => pet.id === petId);
      
      expect(myPet).to.exist;
      expect(myPet.status).to.eq("sold");
      cy.log(`*** MASCOTA ENCONTRADA EN LISTA DE VENDIDOS ***`);
    });
  });
});