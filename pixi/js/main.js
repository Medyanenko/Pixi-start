const app = new PIXI.Application({
    width: 900,
    height: 900,
    backgroundColor: 0x1099bb,
});
document.body.appendChild( app.view );

const container = new PIXI.Container();
app.stage.addChild( container );

const texture = PIXI.Texture.from("image/Smile.png");

const smile = new PIXI.Sprite( texture );
smile.anchor.set(0.5);
container.addChild( smile );

container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

app.ticker.add( (delta) => {
    container.rotation +=0.01 * delta;
});
/*let elapsed = 0.0;
      app.ticker.add((delta) => {
        elapsed += delta;
        smile.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
      });*/