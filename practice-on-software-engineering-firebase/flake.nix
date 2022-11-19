{
  description = "My note-taking application project";

  inputs.nixpkgs.url = "local";

  outputs = { self, nixpkgs }:
    nixpkgs.lib.flake.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShell = pkgs.devshell.mkShell ./devshell.nix;
      }
    );
}
