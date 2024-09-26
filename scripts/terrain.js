function createTerrain(scene) {

  // Criação da função para plataformas
function createPlatform(x, y, w, h, cw, ch, n, tl, ta) {
    scene.platform = scene.add.tileSprite(x, y, w, h, n);
    scene.physics.add.existing(scene.platform, true);
    scene.platform.body.setSize(cw, ch);
     
    // Aplica a escala se os valores forem diferentes de 1
     if (tl && ta) {
      scene.platform.setScale(tl, ta);
  }
     // Adiciona a colisão entre o jogador e a plataforma
     scene.physics.add.collider(scene.player, scene.platform, function(player, platform) {
      // Verifica se o jogador está tocando a plataforma por cima (player.body.touching.down)
      if (player.body.touching.down) {
          scene.player.isOnGround = true;
          console.log("tocando em uma plataforma por cima: " + n);
      }
  }, null, scene);
}

// Criação de plataformas do cenário
createPlatform(519, 569 , 1008, 16, 1008, 16, 'ground_stone');
createPlatform(519, 8, 1008, 16, 1008, 16, 'ground_stone');
createPlatform(1029, 300, 16, 600, 1, 600, 'wall_wood');
createPlatform(8, 300, 16, 600, 1, 600, 'wall_wood');

// Criação de plataformas de areia
createPlatform(613, 538, 816, 46, 816, 46, 'obs_sand');
createPlatform(460, 492, 268, 46, 268, 46, 'obs_sand');
createPlatform(887, 492, 268, 46, 268, 46, 'obs_sand');
createPlatform(880, 446, 144, 46, 144, 46, 'obs_sand');

// Criação de plataformas de grama
createPlatform(880, 420, 144, 15, 0, 0, 'mold_grass');
createPlatform(674, 510, 160, 15, 0, 0, 'mold_grass');
createPlatform(265, 510, 121, 15, 0, 0, 'mold_grass');
createPlatform(460, 464, 268, 15, 0, 0, 'mold_grass');
createPlatform(780, 464, 55, 15, 0, 0, 'mold_grass');
createPlatform(986, 464, 69, 15, 0, 0, 'mold_grass');

// Criação de obstáculos
createPlatform(300, 110, 96, 32, 96, 32, 'obs_brown1');
createPlatform(700, 320, 64, 32, 64, 32, 'obs_brown1');
createPlatform(547, 216, 32, 64, 32, 64, 'obs_brown2');
createPlatform(500, 200, 64, 32, 64, 32, 'obs_brown1');
createPlatform(63, 63, 32, 32, 64, 32, 'obs_brown1',3,3);
createPlatform(141, 48, 32, 32, 64, 32, 'obs_brown1',2,2);


  
}

// Disponibiliza a função globalmente
window.createTerrain = createTerrain;


