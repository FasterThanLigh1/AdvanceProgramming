{ pkgs, ... }:
{
  devshell.name = "note-taking-app";
  devshell.packages = with pkgs; [ nodejs ]
    ++ (with pkgs.nodePackages; [ eslint_d typescript-language-server ]);
  commands = [{ package = pkgs.nodePackages.pnpm; }];
}
