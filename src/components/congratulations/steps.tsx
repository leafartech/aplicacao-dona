export function Steps() {
	return (
		<div className="w-full px-4 flex justify-center items-center">
			<div className="sm:max-w-6xl flex flex-col gap-6 bg-zinc-100 shadow-lg sm:py-12 py-8 sm:px-10 px-6 border border-zinc-300 rounded-2xl">
				<h2 className="text-2xl font-bold text-center text-zinc-800">
					Como funciona o próximo passo?
				</h2>

				<ul className="flex flex-col sm:grid sm:grid-cols-3 gap-6">
					<li className="flex flex-col gap-3 p-6 bg-zinc-100 border border-zinc-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">
								1
							</span>
							<h5 className="text-lg font-semibold text-zinc-800">
								Fique atenta ao seu WhatsApp:
							</h5>
						</div>
						<p className="text-sm text-zinc-600">
							A nossa equipe de Matrículas vai conversar com você por lá para
							confirmar se você tem o encaixe com o perfil de enfermeiras que
							estamos buscando.
						</p>
					</li>

					<li className="flex flex-col gap-3 p-6 bg-zinc-100 border border-zinc-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
								2
							</span>
							<h5 className="text-lg font-semibold text-zinc-800">
								Sinta segurança total:
							</h5>
						</div>
						<p className="text-sm text-zinc-600">
							Pode perguntar o que quiser para a nossa equipe sobre como vamos
							tornar você <strong>DONA</strong> do seu plantão, caso você tenha
							o encaixe com o perfil que buscamos.
						</p>
					</li>

					<li className="flex flex-col gap-3 p-6 bg-zinc-100 border border-zinc-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
						<div className="flex items-center gap-3">
							<span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 font-bold">
								3
							</span>
							<h5 className="text-lg font-semibold text-zinc-800">
								Entre agora mesmo no grupo:
							</h5>
						</div>
						<p className="text-sm text-zinc-600">
							Apenas lá, nós vamos te enviar o link de matrículas na
							segunda-feira, dia <strong>20 de Janeiro</strong> às{" "}
							<strong>07:00</strong>.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
