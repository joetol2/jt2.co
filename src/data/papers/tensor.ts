// Full text of "Accelerating Embodied Policy Learning with Tensor-Network
// Architectures" (Joe Tolerico, July 2026), converted from the author's
// .docx. Figure names map to public/media/papers/tensor/<name>.png.

export type PaperBlock =
  | { type: "h2" | "h3" | "p" | "ref"; text: string }
  | { type: "figure"; src: string; alt: string };

export const tensorPaper: PaperBlock[] = [
  {
    "type": "h2",
    "text": "Abstract"
  },
  {
    "type": "p",
    "text": "This paper advances a narrow claim. EFM_Sim should be used as the first controlled validation environment for testing whether tensor-network policy architectures can accelerate embodied policy learning. The proposed benefit is not framed as a general improvement to robotics. It is framed as a possible improvement in structured policy representation within one defined environment."
  },
  {
    "type": "p",
    "text": "The central hypothesis is that EFM catching contains enough exploitable structure for a tensorized policy to reach a fixed catch-rate threshold with fewer environment interactions than a dense multilayer perceptron trained under the same PPO regime."
  },
  {
    "type": "p",
    "text": "A secondary hypothesis is conditional: if tensor contractions are optimized effectively, the same structural bias may also lower wall-clock training time. Prior work supports the building blocks of this proposal."
  },
  {
    "type": "p",
    "text": "Tensor-train layers can replace dense layers efficiently, matrix-product-state models can function as trainable machine-learning models, and actor-critic reinforcement learning has already been combined with tensor networks for factorisable state and action spaces. The experimental core of this proposal is v29_dense_vs_tensor_ppo."
  },
  {
    "type": "p",
    "text": "Dense PPO and tensorized PPO are trained from scratch under matched seeds, matched rollout budgets, matched hardware, and matched evaluation checkpoints. The primary endpoint is environment interactions to threshold."
  },
  {
    "type": "p",
    "text": "Wall-clock time to threshold is the secondary endpoint. Teacher-student distillation remains part of the program, but only as a calibration pathway for architecture selection and representation testing. It is not the principal evidentiary path. Reinforcement-learning evaluation literature supports this design by showing that point estimates from a small number of runs are unreliable and that interval estimates, robust aggregate statistics, and seed-aware reporting are necessary for credible comparison."
  },
  {
    "type": "h2",
    "text": "Position and scope"
  },
  {
    "type": "p",
    "text": "The question addressed here is precise: can a tensorized PPO policy learn the EFM_Sim catching task faster than a dense PPO policy when the environment, reward function, action space, training budget, and evaluation schedule are held constant? That question is narrow enough to be tested rigorously and important enough to justify a dedicated feasibility study."
  },
  {
    "type": "p",
    "text": "EFM_Sim is treated here as the first controlled validation environment, not as final proof of general robotic advantage. That distinction matters. A positive result in EFM_Sim would show that tensorized policies can improve learning dynamics in a structured embodied-control setting. It would not, by itself, establish hardware transfer, universal superiority over dense networks, or broad robotics generalization. The purpose of the present paper is to define a credible test of the architecture question, not to claim that the full problem is already solved."
  },
  {
    "type": "p",
    "text": "The paper also adopts a strict boundary for simulated annealing. Simulated annealing is not positioned as the main innovation of the initial study. It is positioned as a later optimization layer that becomes relevant only after tensorized policies demonstrate value at the model level. That boundary is necessary because contraction-order search is only meaningful when a tensorized architecture creates genuine contraction choices worth optimizing."
  },
  {
    "type": "h2",
    "text": "Why EFM_Sim is the correct first validation environment"
  },
  {
    "type": "figure",
    "src": "why-efm",
    "alt": "Why EFM_Sim is the first controlled validation environment"
  },
  {
    "type": "p",
    "text": "EFM_Sim is a suitable first validation environment because the target behavior is structured, closed-loop, and measurable. The control problem is not a generic mapping from a flat observation vector to an action vector. It involves coupled joint motion, actuator state, ball-relative dynamics, wrist or palm-frame alignment, and sequence recovery after each interception attempt. Those factors are related, but their dependencies are not uniform across the episode. That makes the environment a plausible candidate for structured policy architectures."
  },
  {
    "type": "p",
    "text": "The software path is also appropriate for this study. Stable-Baselines3 supports custom policy architectures through policy_kwargs, custom feature extractors, and dictionary observations through MultiInputPolicy and CombinedExtractor. PPO in Stable-Baselines3 supports multiprocessing and continuous Box action spaces, which makes it operationally compatible with an EFM-style control environment."
  },
  {
    "type": "p",
    "text": "PyTorch supports einsum, and its documentation states that opt-einsum can be used automatically to optimize contraction order when available. For the purposes of this proposal, EFM_Sim is assumed to provide a functioning PPO baseline, repeatable evaluation seeds, and an environment interface that can expose grouped observations without changing the task definition. Those assumptions are sufficient for a controlled comparison between dense and tensorized policies."
  },
  {
    "type": "h2",
    "text": "Literature basis"
  },
  {
    "type": "p",
    "text": "The strongest representation result comes from the tensor-train literature. Novikov et al. showed that dense neural-network layers can be tensorized into Tensor Train form with large parameter reductions while retaining practical expressive capacity in their tested settings. That does not prove faster learning in reinforcement learning, but it establishes that dense parameterization is not the only credible way to represent a high-dimensional mapping."
  },
  {
    "type": "p",
    "text": "The second foundation comes from tensor-network learning itself. Stoudenmire and Schwab showed that matrix-product-state style models can serve as trainable supervised learning systems. This matters because it moves tensor networks out of the category of physics analogy and into the category of usable model families. A tensor network is not merely a descriptive metaphor for structure. It can be the trainable model. Direct reinforcement-learning precedent is ACTeN."
  },
  {
    "type": "p",
    "text": "Gillman, Rose, and Garrahan integrated tensor networks into actor-critic reinforcement learning and argued that the resulting approach is well suited to large factorisable state and action spaces. That is the closest existing literature bridge to the present proposal."
  },
  {
    "type": "p",
    "text": "The relevance to EFM_Sim lies in structure, not in domain similarity. EFM_Sim is not a rare-trajectory physics benchmark, but it is a setting where state and action can be factorised in a principled way."
  },
  {
    "type": "p",
    "text": "Literature on contraction optimization is also mature enough to support a later optimization chapter. Opt_einsum documentation explains that optimized contraction involves path search followed by execution of the path, and it emphasizes that path choice can dramatically affect runtime while the search problem itself is NP-hard."
  },
  {
    "type": "p",
    "text": "PyTorch documents direct support for an opt-einsum backend in torch.einsum, with configurable strategies. Cotengra extends this with reusable hyper-optimizers, cached paths, persistent disk-backed caches, and a search space that can be refined with advanced methods, including simulated annealing in harder settings. Henderson et al. showed that variance and reporting practice can make many purported improvements ambiguous."
  },
  {
    "type": "p",
    "text": "Agarwal et al. later strengthened that argument and recommended interval estimates together with robust aggregate metrics. Those findings directly inform the design of the proposed dense-versus-tensor study."
  },
  {
    "type": "h2",
    "text": "Hypothesis"
  },
  {
    "type": "p",
    "text": "The primary hypothesis is that a tensorized fusion architecture can improve learning efficiency in EFM_Sim when observation grouping, local encoding, policy outputs, critic architecture, and PPO training conditions are held constant."
  },
  {
    "type": "p",
    "text": "The principal comparison is therefore between a grouped dense policy and a grouped tensorized policy. Both models receive identical observation groups and use matching local encoders. They differ only in the mechanism used to combine the encoded groups before action prediction."
  },
  {
    "type": "p",
    "text": "A separate comparison between the flat dense baseline and the grouped dense control will measure the effect of observation structuring itself. This prevents improvements caused by functional grouping from being incorrectly attributed to the tensorized layer."
  },
  {
    "type": "p",
    "text": "A capacity-matched dense control will also be evaluated. This comparison will help determine whether any observed improvement reflects tensor-network structure or simply a smaller parameterization."
  },
  {
    "type": "p",
    "text": "The primary hypothesis is supported only if the grouped tensorized policy reaches the prespecified catch-rate threshold with materially fewer environment interactions than both the grouped dense control and the capacity-matched dense control."
  },
  {
    "type": "p",
    "text": "The secondary hypothesis concerns computational efficiency. If the tensorized architecture produces repeated contractions with stable shape signatures, cached contraction planning may reduce wall-clock time. This claim will be evaluated separately from learning efficiency."
  },
  {
    "type": "p",
    "text": "The null hypothesis is that tensorization provides no meaningful advantage after grouping and model capacity are controlled. Under that outcome, the tensor-policy track should stop or continue only as a compression study."
  },
  {
    "type": "figure",
    "src": "architectures",
    "alt": "Dense PPO and tensorized PPO architectures side by side"
  },
  {
    "type": "p",
    "text": "The architecture comparison is designed to separate the effects of observation grouping, model capacity, and tensorized fusion."
  },
  {
    "type": "p",
    "text": "The flat dense baseline receives the original observation vector and processes it through a conventional multilayer perceptron."
  },
  {
    "type": "p",
    "text": "The grouped dense control divides the observation into functional groups. Each group is encoded locally, and the resulting embeddings are combined through a dense fusion layer."
  },
  {
    "type": "p",
    "text": "The grouped tensorized policy uses the same functional groups and identical local encoder dimensions. The dense fusion layer is replaced with a tensorized interaction block. The policy head and action output remain unchanged."
  },
  {
    "type": "p",
    "text": "The capacity-matched dense control retains grouped observations and dense fusion, but its hidden dimensions are adjusted so that its trainable parameter count is comparable to the tensorized model."
  },
  {
    "type": "p",
    "text": "This structure creates two interpretable comparisons. Flat dense versus grouped dense measures the effect of observation organization. Grouped dense versus grouped tensorized measures the effect of tensorized fusion."
  },
  {
    "type": "h2",
    "text": "Experimental design for v29_dense_vs_tensor_ppo"
  },
  {
    "type": "p",
    "text": "The main study compares two training families under matched conditions: dense PPO and tensorized PPO. Both are trained from random initialization. The task definition, reward function, observation semantics, action bounds, rollout horizon, optimizer schedule, training budget, hardware allocation, and evaluation checkpoints remain fixed across arms. The only intended change is policy architecture."
  },
  {
    "type": "p",
    "text": "The dense arm uses a standard MLP policy with conventional feature fusion. The tensorized arm uses grouped observations followed by a tensorized fusion block. A prudent implementation path is to factor the observation into arm kinematics, actuator dynamics, ball-relative motion, hand-frame alignment, and sequence context."
  },
  {
    "type": "figure",
    "src": "experiment",
    "alt": "Core experimental design for the dense versus tensorized PPO comparison"
  },
  {
    "type": "p",
    "text": "Core experimental design for v29_dense_vs_tensor_ppo. Dense PPO and tensorized PPO are trained from scratch under matched conditions in EFM_Sim and evaluated on fixed held-out seeds using threshold-based learning metrics and supporting performance measures."
  },
  {
    "type": "p",
    "text": "Each group is encoded locally. The encoded groups are then fused through a tensorized block, after which a standard policy head produces actuator commands. Stable-Baselines3's support for custom policy networks and dictionary observations makes this architecture viable without rewriting PPO itself. The study should proceed in two phases. A pilot phase validates logging, rank settings, and profiler instrumentation."
  },
  {
    "type": "p",
    "text": "A confirmatory phase then estimates the primary endpoint under a larger seed set. The primary endpoint is environment interactions to a prespecified catch-rate threshold. Wall-clock time to the same threshold is the secondary endpoint. Additional outcomes include the full learning curve, worst-seed performance, policy parameter count, inference latency, and actuator-command smoothness."
  },
  {
    "type": "p",
    "text": "The statistical analysis must match the sensitivity of the question. A single best run is not evidence. Each policy arm should therefore be trained across paired random seeds. The analysis should report interval estimates on threshold-crossing metrics and use a robust aggregate statistic for overall learning performance. This approach is consistent with recommendations from the reinforcement-learning evaluation literature."
  },
  {
    "type": "figure",
    "src": "evaluation",
    "alt": "Evaluation framework with primary, secondary and supporting metrics"
  },
  {
    "type": "h3",
    "text": "Role of Distillation"
  },
  {
    "type": "p",
    "text": "Teacher-student distillation is included as a methodological support path rather than as the primary evidentiary path. It can determine whether a tensorized architecture is capable of representing a working policy, help set latent dimensions and tensor ranks before from-scratch PPO sweeps, and produce realistic contraction workloads for profiling."
  },
  {
    "type": "p",
    "text": "What distillation cannot demonstrate is faster reinforcement-learning acquisition from random initialization. The central claim of this proposal concerns learning speed under PPO. That claim must therefore be evaluated through matched from-scratch PPO runs. Distillation should be retained as a calibration pathway and as a fallback if tensorized PPO proves too unstable in early pilot runs."
  },
  {
    "type": "h2",
    "text": "Simulated annealing as a later optimization layer"
  },
  {
    "type": "p",
    "text": "The strongest version of this chapter distinguishes clearly between what is established, what is proposed for near-term implementation, and what remains speculative."
  },
  {
    "type": "p",
    "text": "The established result is that contraction ordering matters. Schindler and Jermyn studied tensor-network contraction ordering and found that simulated annealing and genetic algorithms can outperform greedy search under matched computational budgets."
  },
  {
    "type": "p",
    "text": "Cotengra documentation reinforces this practical point by exposing reusable optimizers, persistent path caches, and configuration paths in which simulated annealing can outperform dynamic slicing on some hard contractions."
  },
  {
    "type": "figure",
    "src": "annealing",
    "alt": "Simulated annealing as a later optimization layer"
  },
  {
    "type": "p",
    "text": "The near-term proposal is this: simulated annealing should optimize how a validated tensorized layer is executed, not what model is being trained. In practical terms, annealing should first target contraction path selection, slicing plans, and memory-aware execution schedules for fixed tensor equations with repeated shape signatures. opt_einsum already separates path search from repeated contraction through contract_expression."
  },
  {
    "type": "p",
    "text": "Cotengra adds cached reusable search with persistent storage. This makes it possible for EFM_Sim to adopt an asynchronous search model in which PPO continues training on the best cached contraction path while a side process searches for a better one. When the search process finds a path that wins a microbenchmark under the current shapes and ranks, the runtime updates the cache and continues."
  },
  {
    "type": "p",
    "text": "A practical implementation would look as follows. The training loop records every tensor equation and shape signature emitted by the tensorized fusion block. A path cache is keyed by equation, shape signature, and rank signature."
  },
  {
    "type": "p",
    "text": "On first use, a default opt_einsum or cotengra path is computed. In the background, a simulated-annealing search process explores nearby contraction trees. The candidate path is accepted only if it improves a validation objective that includes both latency and peak memory. The online training loop never waits for this search. It only consumes cache entries that have already been validated."
  },
  {
    "type": "p",
    "text": "The later proposal, which should be described as future work, concerns dynamic tensor-rank adaptation. There is relevant evidence from factorized neural-network training that adaptive rank schedules can be made principled, including work on geometry-aware training of Tucker-factorized layers and work on automatic rank determination in Bayesian tensorized training."
  },
  {
    "type": "p",
    "text": "Those studies justify treating rank adaptation as a serious research direction. They do not justify changing tensor ranks freely inside on-policy PPO. In EFM_Sim, rank changes would alter optimizer state, invalidate cached paths, and complicate the attribution of learning gains."
  },
  {
    "type": "p",
    "text": "The appropriate next step is therefore checkpointed rank adaptation at coarse intervals, with stabilization windows between structural changes. The speculative idea is low-level online path publication on the GPU."
  },
  {
    "type": "p",
    "text": "NVIDIA's atomicCAS primitive could, in principle, support lock-free publication of small path metadata objects. That possibility is worth noting because it points toward future systems work. It should not be part of the first implementation. The first implementation should remain much simpler: CPU search, cached path validation, and training-device execution."
  },
  {
    "type": "h2",
    "text": "Risks and decision criteria"
  },
  {
    "type": "p",
    "text": "The proposal fails cleanly if tensorized PPO does not improve environment interactions to threshold. It also fails if the mean improves but the variance expands enough to erase practical value. A third failure mode is runtime overhead: the tensorized model may be smaller in parameters yet slower in training because contraction planning or execution is handled badly."
  },
  {
    "type": "p",
    "text": "The decision logic should therefore be strict. If tensorized PPO reaches threshold in materially fewer interactions, the architecture track continues. If it ties the dense baseline but yields a substantially smaller model, the work may continue as a compression track. If it loses clearly after the confirmatory study, the architecture pivot should stop. Simulated annealing should only advance into implementation if the tensorized model has already justified itself at the policy level."
  },
  {
    "type": "figure",
    "src": "roadmap",
    "alt": "Research roadmap with decision gates between phases"
  },
  {
    "type": "h2",
    "text": "Conclusion"
  },
  {
    "type": "p",
    "text": "This paper proposes a bounded feasibility study. EFM_Sim is the right first validation environment because it provides a structured embodied-control task, a repeatable evaluation framework, and a working PPO baseline for fair comparison."
  },
  {
    "type": "p",
    "text": "The main study compares dense PPO and tensorized PPO from random initialization under matched conditions, while distillation remains a support path and simulated annealing is deferred until tensorized policies show clear model-level value. If tensorized PPO reaches the target catch threshold with fewer environment interactions, the main claim is supported. If contraction optimization also reduces wall-clock time, the case is stronger. If neither result appears, the study will still show that the current EFM_Sim problem scale does not yet justify tensorized PPO over a dense baseline."
  },
  {
    "type": "h2",
    "text": "References"
  },
  {
    "type": "ref",
    "text": "Agarwal, R., Schwarzer, M., Castro, P. S., Courville, A. C., & Bellemare, M. G. (2021). Deep reinforcement learning at the edge of the statistical precipice. In Advances in Neural Information Processing Systems, 34. https://proceedings.neurips.cc/paper/2021/hash/f514cec81cb148559cf475e7426eed5e-Abstract.html"
  },
  {
    "type": "ref",
    "text": "cotengra documentation. (n.d.). Basics. https://cotengra.readthedocs.io/en/main/basics.html"
  },
  {
    "type": "ref",
    "text": "Gillman, E., Rose, D. C., & Garrahan, J. P. (2022). Combining reinforcement learning and tensor networks, with an application to dynamical large deviations. arXiv. https://arxiv.org/abs/2209.14089"
  },
  {
    "type": "ref",
    "text": "Hawkins, C., Liu, X., & Zhang, Z. (2020). Towards compact neural networks via end-to-end training: A Bayesian tensor approach with automatic rank determination. arXiv. https://arxiv.org/abs/2010.08689"
  },
  {
    "type": "ref",
    "text": "Henderson, P., Islam, R., Bachman, P., Pineau, J., Precup, D., & Meger, D. (2018). Deep reinforcement learning that matters. Proceedings of the AAAI Conference on Artificial Intelligence, 32(1). https://ojs.aaai.org/index.php/AAAI/article/view/11694"
  },
  {
    "type": "ref",
    "text": "Novikov, A., Podoprikhin, D., Osokin, A., & Vetrov, D. (2015). Tensorizing neural networks. In Advances in Neural Information Processing Systems, 28. https://papers.nips.cc/paper_files/paper/2015/hash/6855456e2fe46a9d49d3d3af4f57443d-Abstract.html"
  },
  {
    "type": "ref",
    "text": "opt_einsum documentation. (n.d.). Path finding. https://optimized-einsum.readthedocs.io/en/stable/path_finding.html"
  },
  {
    "type": "ref",
    "text": "opt_einsum documentation. (n.d.). Reusing paths. https://optimized-einsum.readthedocs.io/en/stable/reusing_paths.html"
  },
  {
    "type": "ref",
    "text": "PyTorch documentation. (n.d.). Backends. https://docs.pytorch.org/docs/stable/backends.html"
  },
  {
    "type": "ref",
    "text": "PyTorch documentation. (n.d.). torch.einsum. https://docs.pytorch.org/docs/stable/generated/torch.einsum.html"
  },
  {
    "type": "ref",
    "text": "Schindler, F., & Jermyn, A. S. (2020). Algorithms for tensor network contraction ordering. arXiv. https://arxiv.org/abs/2001.08063"
  },
  {
    "type": "ref",
    "text": "Stable-Baselines3 documentation. (n.d.). Custom policy network. https://stable-baselines3.readthedocs.io/en/master/guide/custom_policy.html"
  },
  {
    "type": "ref",
    "text": "Stoudenmire, E. M., & Schwab, D. J. (2016). Supervised learning with tensor networks. In Advances in Neural Information Processing Systems, 29. https://papers.nips.cc/paper_files/paper/2016/hash/5314b9674c86e3f9d1ba25ef9bb32895-Abstract.html"
  },
  {
    "type": "ref",
    "text": "Zangrando, E., Schotthöfer, S., Ceruti, G., Kusch, J., & Tudisco, F. (2023). Geometry-aware training of factorized layers in tensor Tucker format. arXiv. https://arxiv.org/abs/2305.19059"
  }
];
